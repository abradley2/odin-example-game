package scene

import "../entity"
import "../tiled"
import "../world"
import "core:log"
import "core:testing"

@(test)
_run_scene_state_test :: proc(t: ^testing.T) {
	w := new(world.World)
	defer free(w)

	entity_pool := entity.new_pool(context.allocator)
	defer entity.free_pool(entity_pool)

	scene_state: Scene_State

	run_scene_state(&scene_state, w, entity_pool, tiled.Map_Id.Level01)
	run_scene_state(&scene_state, w, entity_pool, tiled.Map_Id.Level02)
	run_scene_state(&scene_state, w, entity_pool, nil)
}
