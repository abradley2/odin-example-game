package tiled

// GUIDE: Add new maps here
Map_Id :: enum {
	Level01,
	Level02,
}

map_id_to_file_path_string :: proc(id: Map_Id) -> (file_path_string: string) {
	switch id {
	case .Level01:
		file_path_string = "assets/level_01.json"
	case .Level02:
		file_path_string = "assets/level_02.json"
	}
	return
}
