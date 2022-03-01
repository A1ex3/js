let students = [
	{ 'id': 1, 'name': 'Danila', 'surname': 'Alferov' },
	{ 'id': 2, 'name': 'Tihon', 'surname': 'Balaganski' },
	{ 'id': 3, 'name': 'Konstantin', 'surname': 'Bobrovski' },
	{ 'id': 4, 'name': 'Vladimir', 'surname': 'Burikin' },
	{ 'id': 5, 'name': 'Semen', 'surname': 'Veligjanin' }
]
let current = 0

function load_student(id) {
	document.getElementById('name').value = students[id].name
	document.getElementById('surname').value = students[id].surname
}

function next() {
	load_student(current)
	current++

	if (current == students.length) {
		document.getElementById('nextt').disabled = true
	}
	console.log(current)
	if (current == students.length) {
		//back()
		document.getElementById('backk').disabled = false
	}
}
function back() {
	current--
	load_student(current)
	console.log(current)
	if (current == 0) {
		//back()
		document.getElementById('backk').disabled = true
	}
	if (current == 0) {
			document.getElementById('nextt').disabled = false
	}

	if (current == students.length - 1) {
		document.getElementById('nextt').disabled = false
    }

}