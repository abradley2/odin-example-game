
package system 

import "../component"

run_respawn_system :: proc(
	respawn_components: []Maybe(component.Respawn),
	position_components: []Maybe(component.Position),
) {
	for entity_id in 0 ..< len(respawn_components) {
		respawn := (&respawn_components[entity_id].?) or_continue
		position := (&position_components[entity_id].?) or_continue

		if position.y > 400 {
			position.x = respawn.x
			position.y = respawn.y
		}
	}
}