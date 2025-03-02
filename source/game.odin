package game

import "./entity"

import "./component"
import "./controls"
import "./quadtree"
import "./scene"
import "./system"
import "./texture"
import "./tiled"
import "core:c"
import "vendor:raylib"

run: bool

entity_pool: ^entity.Pool
w: #soa[entity.POOL_SIZE]entity.Entity

tile_map_packed_texture: raylib.Texture
tile_map_backgrounds_packed_texture: raylib.Texture
characters_packed_texture: raylib.Texture

ui_button_blue_texture: raylib.Texture
ui_arrow_basic_blue_texture: raylib.Texture

game_width :: f32(320.0)

screen_width: f32
screen_height: f32

paralax_camera_target: raylib.Vector2
camera_target: raylib.Vector2

init :: proc() {
	run = true
	raylib.SetConfigFlags({.WINDOW_RESIZABLE, .VSYNC_HINT})
	raylib.InitWindow(1280, 720, "Odin + Raylib on the web")

	entity_pool = entity.new_pool(context.allocator)

	raylib.SetTargetFPS(61)

	screen_width = f32(raylib.GetScreenWidth())
	screen_height = f32(raylib.GetScreenHeight())

	// Load textures
	texture.load(texture.Texture_Id.UI_Button_Blue, &ui_button_blue_texture)
	texture.load(texture.Texture_Id.UI_Arrow_Basic_Blue, &ui_arrow_basic_blue_texture)
	texture.load(texture.Texture_Id.Tile_Map_Packed, &tile_map_packed_texture)
	texture.load(
		texture.Texture_Id.Tile_Map_Backgrounds_Packed,
		&tile_map_backgrounds_packed_texture,
	)
	texture.load(texture.Texture_Id.Characters_Packed, &characters_packed_texture)
}


// GUIDE: editing this variable will cause the map to change
set_current_map_id: tiled.Map_Id = tiled.Map_Id.Level01
scene_state: scene.Scene_State = nil

update :: proc() {
	scene.run_scene_state(&scene_state, &w, entity_pool, set_current_map_id)

	parallax_camera := raylib.Camera2D {
		offset   = raylib.Vector2{0, 0},
		target   = paralax_camera_target,
		rotation = 0,
		zoom     = 1,
	}

	camera := raylib.Camera2D {
		offset   = raylib.Vector2{0, 0},
		target   = camera_target,
		rotation = 0,
		zoom     = 1,
	}

	// paralax_camera_target += raylib.Vector2{0.5, 0.0}
	// paralax_camera_target[1] = 32
	// camera_target += raylib.Vector2{1.0, 0.0}

	if raylib.IsWindowResized() {
		screen_width = f32(raylib.GetScreenWidth())
		screen_height = f32(raylib.GetScreenHeight())
		raylib.SetWindowSize(raylib.GetScreenWidth(), raylib.GetScreenHeight())
	}

	zoom := screen_width / game_width
	camera.zoom = zoom
	parallax_camera.zoom = zoom

	loaded_scene, scene_is_loaded := scene_state.(scene.Scene_Loaded)
	if !scene_is_loaded {
		return
	}

	controls := controls.run_keyboard_inputs()
	delta := raylib.GetFrameTime() / 0.01666

	system.run_gravity_system(delta, w.gravity[:], w.velocity[:])
	system.run_static_collisions_system(
		delta,
		loaded_scene.static_collisions,
		w.position[:],
		w.velocity[:],
		w.collision_box[:],
	)
	system.run_velocity_system(delta, w.velocity[:], w.position[:])
	system.run_player_controls_system(
		controls,
		w.sprite[:],
		w.velocity[:],
		w.is_player[:],
		w.collision_box[:],
	)
	system.run_animation_system(delta, w.sprite[:], w.animation_frames[:])


	raylib.BeginDrawing()
	raylib.ClearBackground({194, 227, 232, 255})

	raylib.BeginMode2D(parallax_camera)
	{
		bg_width := game_width / 2
		bg_height := bg_width * (96 / 72)

		bg_idx: f32
		bg_idx = -20

		for bg_idx < 20 {
			raylib.DrawTexturePro(
				tile_map_backgrounds_packed_texture,
				raylib.Rectangle{0, 0, 96, 72},
				raylib.Rectangle{bg_width * bg_idx, 0, bg_width, bg_height},
				{0.0, 0.0},
				0.0,
				raylib.WHITE,
			)
			bg_idx += 1
		}

	}
	raylib.EndMode2D()

	raylib.BeginMode2D(camera)

	{
		for has_position, entity_id in w.position {
			sprite_group, has_sprite_group := w.sprite_group[entity_id].?
			sprite, has_sprite := w.sprite[entity_id].?
			position := has_position.? or_continue

			if has_sprite_group {
				for sprite_group_sprite in sprite_group.sprites {
					render_sprite(position, sprite_group_sprite)
				}
			}

			if has_sprite {
				render_sprite(position, sprite)
			}
		}
	}

	raylib.EndMode2D()

	raylib.EndDrawing()

	free_all(context.temp_allocator)
}

render_sprite :: proc(position: raylib.Vector2, sprite: component.Sprite) -> (did_render: bool) {
	sprite_position := position + sprite.dst_offset

	found_texture: Maybe(raylib.Texture)
	switch sprite.texture_id {
	case texture.Texture_Id.Tile_Map_Packed:
		found_texture = tile_map_packed_texture
	case texture.Texture_Id.Tile_Map_Backgrounds_Packed:
		found_texture = tile_map_backgrounds_packed_texture
	case texture.Texture_Id.Characters_Packed:
		found_texture = characters_packed_texture
	case texture.Texture_Id.UI_Button_Blue:
		found_texture = ui_button_blue_texture
	case texture.Texture_Id.UI_Arrow_Basic_Blue:
		found_texture = ui_arrow_basic_blue_texture
	case texture.Texture_Id.Missing:
		found_texture = nil
	}
	texture := found_texture.? or_return

	dst_rect := raylib.Rectangle {
		x      = sprite_position[0],
		y      = sprite_position[1],
		width  = sprite.dst_width,
		height = sprite.dst_height,
	}

	src_rect := raylib.Rectangle {
		x      = sprite.src_rect.x,
		y      = sprite.src_rect.y,
		width  = sprite.src_rect.width,
		height = sprite.src_rect.height,
	}

	if sprite.flipped {
		src_rect.width *= -1
	}

	raylib.DrawTexturePro(texture, src_rect, dst_rect, {0, 0}, 0, raylib.WHITE)
	did_render = true
	return
}

parent_window_size_changed :: proc(w, h: int) {
	raylib.SetWindowSize(c.int(w), c.int(h))
}

shutdown :: proc() {
	switch v in scene_state {
	case scene.Scene_Loaded:
		quadtree.free_quad_tree(v.static_collisions)
		free(v.static_collisions)
	case nil, scene.Scene_Error:
	}
	raylib.CloseWindow()
}

should_run :: proc() -> bool {
	when ODIN_OS != .JS {
		// Never run this proc in browser. It contains a 16 ms sleep on web!
		if raylib.WindowShouldClose() {
			run = false
		}
	}

	return run
}
