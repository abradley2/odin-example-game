package system

import "../component"

run_gravity_system :: proc(
	dt: f32,
	gravity_components: []Maybe(component.Gravity),
	velocity_components: []Maybe(component.Velocity),
) {
	for has_gravity, i in gravity_components {
		if has_gravity == nil {
			continue
		}
		velocity := (&velocity_components[i].?) or_continue
		velocity.y += 0.1 * dt
	}
}
