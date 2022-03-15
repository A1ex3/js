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


	ctx.beginPath();
	ctx.fillStyle = "red"; // цвет заливки
	ctx.moveTo(75, 40);
	ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
	ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
	ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
	ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
	ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
	ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
	ctx.fill();
}