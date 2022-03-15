function draw() {

	// Получение элемента canvas, контекста и свойства Math.PI
	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	let pi = Math.PI;

	ctx.beginPath();
	ctx.lineWidth = 7;
	ctx.strokeStyle = "green";
	ctx.fillStyle = "yellow";
	ctx.arc(150, 150, 85, 0, 2 * pi, false);
	ctx.stroke();
	ctx.fill();


	ctx.beginPath();// начало нового пути
	ctx.lineWidth = 7; // толщина обводки
	ctx.strokeStyle = "green"; // цвет обводки
	ctx.moveTo(75, 75); // координаты начальной точки
	ctx.quadraticCurveTo(100, 150, 300, 50); // координаты точки искривления и конечной точки
	ctx.stroke();
}