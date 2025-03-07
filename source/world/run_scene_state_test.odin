package world

import "../tiled"
import "core:log"
import "core:testing"

@(test)
_run_scene_state_test :: proc(t: ^testing.T) {
	w := new(World)
	defer free(w)

	entity_pool := new_pool(context.allocator)
	defer free_pool(entity_pool)

	scene_state: Scene_State

	run_scene_state(&scene_state, w, entity_pool, tiled.Map_Id.Level02)
	run_scene_state(&scene_state, w, entity_pool, tiled.Map_Id.Level01)

	run_scene_state(&scene_state, w, entity_pool, nil)
}
