 let students = []

function loadFromSite()  {
	$.get('http://217.71.129.139:4035/students.php', function(data) {
		students = JSON.parse(data)['response'];
		createTable();
	});
	
}


function createTable() {
	
	let table = $('#tbl_all>tbody')
	table.html('')
	for (let i = 0; i < students.length; i++) {
		let tr = $('<tr></tr>');
		let td1 = $(`<td> ${students[i].id} </td>`);
		let td2 = $(`<td> ${students[i].surname} </td>`);
		let td3 = $(`<td> ${students[i].name} </td>`);
		let td4 = $(`<td><button onclick="showInfo(${i})">More info</buttom></td>`);
		tr.append(td1).append(td2).append(td3).append(td4)
		table.append(tr)
	}
}

function showInfo(id) {
	let div = $('#info');
	let head = $(`<h1>Information about student № ${id+1}</h1>`);
	let name = $(`<h3>${students[id].name} ${students[id].surname}</h3>`);
	let img = $(`<img scr="http://217.71.129.139:4035/${students[id].logo}>`);
	div.html('')
	div.append(head).append(name).append(img)
}

function compare( a, b ) {
  if ( a.surname < b.surname ){
    return -1;
  }
  if ( a.surname > b.surname ){
    return 1;
  }
  return 0;
}
function abcsort() {
	students.sort(compare);
	console.log(students)
	createTable();
}

function reverse() {
	students.sort(compare)
	students.reverse();
	console.log(students)
	createTable();

}
