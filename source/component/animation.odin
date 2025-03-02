package component

import "../texture"
import "vendor:raylib"

Animation_Frame :: struct {
	src_rect:   raylib.Rectangle,
	texture_id: texture.Texture_Id,
}

Animation_Frames :: struct {
	frame_duration:    f32,
	current_duration:  f32,
	current_frame_idx: int,
	frames:            ^[dynamic]Animation_Frame,
}

Animation_Id :: enum {
	Player_Walk,
}

make_animation :: proc(
	animation_id: Animation_Id,
	frames: ^[dynamic]Animation_Frame,
) -> (
	animation_frames: Animation_Frames,
) {
	resize(frames, 0)

	switch animation_id {
	case Animation_Id.Player_Walk:
		append(
			frames,
			Animation_Frame {
				src_rect = raylib.Rectangle{0, 0, 24, 24},
				texture_id = texture.Texture_Id.Characters_Packed,
			},
			Animation_Frame {
				src_rect = raylib.Rectangle{24, 0, 24, 24},
				texture_id = texture.Texture_Id.Characters_Packed,
			},
		)
		animation_frames = Animation_Frames {
			frame_duration = 16.0,
			frames         = frames,
		}
	}

	return
}
