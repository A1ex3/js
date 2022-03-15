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
	ctx.lineWidth = 7;
	ctx.strokeStyle = "gray";
	ctx.fillStyle = "pink";
	ctx.arc(250, 150, 85, 0, 2 * pi, false);
	ctx.stroke();
	ctx.fill();
}