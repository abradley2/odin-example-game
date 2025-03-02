package component

import "vendor:raylib"

Did_Touch :: enum {
	None,
	Wall,
	Floor,
}

Did_Touch_Set :: bit_set[Did_Touch;byte]

Collision_Box :: struct {
	did_touch: Did_Touch_Set,
	size:      raylib.Vector2,
	offset:    raylib.Vector2,
}
