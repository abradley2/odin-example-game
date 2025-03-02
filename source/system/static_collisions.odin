package system

import "../component"
import "../quadtree"

run_static_collisions_system :: proc(
	dt: f32,
	static_collisions: ^quadtree.Quad_Tree,
	position_components: []Maybe(component.Position),
	velocity_components: []Maybe(component.Velocity),
	collision_box_components: []Maybe(component.Collision_Box),
) {
	nearby_boxes, _ := make([dynamic]quadtree.Box, 0, 64, context.temp_allocator)

	for i in 0 ..< len(position_components) {
		position := (&position_components[i].?) or_continue
		velocity := (&velocity_components[i].?) or_continue
		collision_box := (&collision_box_components[i].?) or_continue

		next_position := position^ + (velocity^ * dt)
		next_collision_box := quadtree.Box {
			position = next_position,
			w        = collision_box.size.x,
			h        = collision_box.size.y,
		}

		quadtree.query_nearby_boxes(static_collisions, &nearby_boxes, next_collision_box)

		collision_box.did_touch = {}

		for box in nearby_boxes {
			if box.position.x < next_position.x + collision_box.size.x &&
			   box.position.x + box.w > next_position.x &&
			   box.position.y < next_position.y + collision_box.size.y &&
			   box.position.y + box.h > next_position.y {

				// is a ground collision if only using the updated y position causes a collision
				is_ground_collision :=
					box.position.x < position.x + collision_box.size.x &&
					box.position.x + box.w > position.x &&
					box.position.y < next_position.y + collision_box.size.y &&
					box.position.y + box.h > next_position.y

				is_wall_collision :=
					box.position.x < next_position.x + collision_box.size.x &&
					box.position.x + box.w > next_position.x &&
					box.position.y < position.y + collision_box.size.y &&
					box.position.y + box.h > position.y


				if is_ground_collision {
					if velocity.y > 0 {
						position[1] = box.position.y - collision_box.size.y
						collision_box.did_touch = collision_box.did_touch | {.Floor}
					}
					velocity[1] = 0
				}


				is_left_wall_collision :=
					(next_position.x < box.position.x + box.w) && velocity[0] < 0
				if is_wall_collision && is_left_wall_collision {
					collision_box.did_touch = collision_box.did_touch | {.Wall}
					position[0] = box.position.x + box.w
					velocity[0] = 0
					continue
				}

				is_right_wall_collision :=
					(next_position.x + collision_box.size.x > box.position.x) && velocity[0] > 0
				if is_wall_collision && is_right_wall_collision {
					collision_box.did_touch = collision_box.did_touch | {.Wall}
					position[0] = box.position.x - collision_box.size.x
					velocity[0] = 0
					continue
				}


			}
		}

		clear(&nearby_boxes)
	}
}
