package controls

import "vendor:raylib"


run_keyboard_inputs :: proc() -> Controls {
	jump_just_pressed := raylib.IsKeyPressed(raylib.KeyboardKey.SPACE)

	jump_pressed := raylib.IsKeyDown(raylib.KeyboardKey.SPACE)
	left_pressed := raylib.IsKeyDown(raylib.KeyboardKey.LEFT)
	right_pressed := raylib.IsKeyDown(raylib.KeyboardKey.RIGHT)

	left_right_analog: f32

	if left_pressed {
		left_right_analog -= 1.0
	}
	if right_pressed {
		left_right_analog += 1.0
	}

	return Controls {
		jump_just_pressed = jump_just_pressed,
		jump_pressed = jump_pressed,
		left_right_axis = left_right_analog,
	}
}
