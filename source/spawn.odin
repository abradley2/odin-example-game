package game

import "./component"
import "./entity"
import "./texture"
import "./tiled"
import "vendor:raylib"

// GUIDE: spawn entities in response to special tiles on the map
check_spawn :: proc(
	world: ^World,
	custom_properties: []tiled.Custom_Property,
	entity_pool: ^entity.Pool,
	position: raylib.Vector3,
) {
	for custom_property in custom_properties {
		#partial switch property in custom_property {
		case tiled.Player_Spawn:
			player_entity_ref := entity.alloc_entity(entity_pool, true)

			animation_frames := entity.alloc_animation_frames(
				entity_pool,
				player_entity_ref.local_id,
			)

			world.animation_frames[player_entity_ref.local_id] = component.make_animation(
				component.Animation_Id.Player_Walk,
				animation_frames,
			)

			world.is_player[player_entity_ref.local_id] = component.Is_Player{}

			world.position[player_entity_ref.local_id] = position + raylib.Vector3{0, -16, 0}
			world.respawn[player_entity_ref.local_id] = position + raylib.Vector3{0, -16, 0}

			world.gravity[player_entity_ref.local_id] = component.Gravity{}

			world.velocity[player_entity_ref.local_id] = raylib.Vector2{0, 0}
			world.collision_box[player_entity_ref.local_id] = component.Collision_Box {
				offset = raylib.Vector2{6, 4},
				size   = raylib.Vector2{12, 20},
			}
			world.sprite[player_entity_ref.local_id] = component.Sprite {
				texture_id = texture.Texture_Id.Characters_Packed,
				src_rect   = raylib.Rectangle{0, 0, 24, 24},
				dst_offset = {0, 0},
				dst_width  = 24,
				dst_height = 24,
			}

		}
	}
}
