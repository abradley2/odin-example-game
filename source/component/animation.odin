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
