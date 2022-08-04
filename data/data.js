
data = {
	"start": "id1",
	"persons": {
		"id1": { "id": "id1", "name": "David Montgomery", "birthyear": 1993, "own_unions": [], "parent_union": "u1"},
		"id2": { "id": "id2", "name": "Anna Montgomery", "birthyear": 1961, "own_unions": ["u1"]},
		"id3": { "id": "id3", "name": "Erland Montgomery", "birthyear": 1961, "own_unions": ["u1"]},
		"id4": { "id": "id4", "name": "Mattias Montgomery", "birthyear": 1990, "own_unions": ["u2"], "parent_union": "u1"},
		"id5": { "id": "id5", "name": "Kerstin Montgomery", "birthyear": 2020, "own_unions": [], "parent_union": "u2"},
		"id6": { "id": "id6", "name": "Matilda Montgomery", "birthyear": 1989, "own_unions": ["u2"]},
		"id7": { "id": "id7", "name": "Valdemar Montgomery", "birthyear": 2022, "own_unions": [], "parent_union": "u2"}
	},
	"unions": {
		"u1": { "id": "u1", "partner": ["id2", "id3"], "children": ["id1", "id4"]},
		"u2": { "id": "u2", "partner": ["id4", "id6"], "children": ["id5", "id7"]}
	},
	"links": [
		["id2", "u1"],
		["id3", "u1"],
		["u1", "id1"],
		["u1", "id4"],
		["id4", "u2"],
		["id6", "u2"],
		["u2", "id5"],
		["u2", "id7"]
	]
}