package scene

import "../entity"
import "../quadtree"
import "../tiled"
import "../world"

Scene_Error :: struct {}

Scene_Loaded :: struct {
	map_id:            tiled.Map_Id,
	static_collisions: ^quadtree.Quad_Tree,
}

Scene_State :: union {
	Scene_Error,
	Scene_Loaded,
}

run_scene_state :: proc(
	state: ^Scene_State,
	w: ^world.World,
	entity_pool: ^entity.Pool,
	target_map_id: Maybe(tiled.Map_Id),
) {
	map_id, has_map_id := target_map_id.?

	if !has_map_id {
		if s, scene_loaded := state.(Scene_Loaded); scene_loaded {
			quadtree.free_quad_tree(s.static_collisions)
			free(s.static_collisions)
		}
		return
	}

	switch v in state {
	case nil:
		if world_static_collisions, ok := world.load_world(map_id, w, entity_pool); ok {
			state^ = Scene_Loaded {
				map_id            = map_id,
				static_collisions = world_static_collisions,
			}
		} else {
			state^ = Scene_Error{}
		}
		free_all(context.temp_allocator)
	case Scene_Loaded:
		if v.map_id != map_id {
			quadtree.free_quad_tree(v.static_collisions)
			free(v.static_collisions)

			if world_static_collisions, ok := world.load_world(v.map_id, w, entity_pool); ok {
				state^ = Scene_Loaded {
					map_id            = v.map_id,
					static_collisions = world_static_collisions,
				}
			} else {
				state^ = Scene_Error{}
			}
			free_all(context.temp_allocator)
		}
	case Scene_Error:
	}
}
