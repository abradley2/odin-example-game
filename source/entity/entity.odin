package entity

import "../component"

EntityRef :: struct {
	local_id:  int,
	global_id: u64,
}

Entity :: struct {
	position:      Maybe(component.Position),
	velocity:      Maybe(component.Velocity),
	sprite:        Maybe(component.Sprite),
	sprite_group:  Maybe(component.Sprite_Group),
	collision_box: Maybe(component.Collision_Box),
	gravity:       Maybe(component.Gravity),
	is_player:     Maybe(component.Is_Player),
}
