function draw() {

	// Получение элемента canvas, контекста и свойства Math.PI
	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	let pi = Math.PI;

	ctx.beginPath();// начало нового пути
	ctx.lineWidth = 7; // толщина обводки
	ctx.strokeStyle = "green"; // цвет обводки
	// Координаты центра круга, радиус, начальный угол, конечный угол, направление по часовой стрелке
	ctx.arc(100, 100, 75, 0, pi / 2, false);
	ctx.stroke();
}