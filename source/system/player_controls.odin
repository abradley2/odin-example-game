package system

import "../component"
import "../controls"

run_player_controls_system :: proc(
	game_controls: controls.Controls,
	sprite_components: []Maybe(component.Sprite),
	velocity_components: []Maybe(component.Velocity),
	is_player_components: []Maybe(component.Is_Player),
	collision_box_components: []Maybe(component.Collision_Box),
) {
	for entity_id in 0 ..< len(velocity_components) {
		sprite := (&sprite_components[entity_id].?) or_continue
		velocity := (&velocity_components[entity_id].?) or_continue
		collision_box := (&collision_box_components[entity_id].?) or_continue

		if is_player_components[entity_id] == nil {
			continue
		}

		player_speed: f32
		player_speed = 2.0

		player_jump_speed: f32
		player_jump_speed = -4.0

		velocity.x = game_controls.left_right_axis * player_speed

		if component.Did_Touch.Floor in collision_box.did_touch && game_controls.jump_pressed {
			velocity.y = player_jump_speed
		}

		if velocity.x > 0 {
			sprite.flipped = true
		}
		if velocity.x < 0 {
			sprite.flipped = false
		}

		break
	}
}
