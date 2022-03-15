function draw() {

	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	ctx.stroke();
	ctx.fillStyle = "pink"; //цвет заливки
	ctx.beginPath();
	ctx.moveTo(225, 150);
	ctx.lineTo(75, 100);
	ctx.lineTo(200, 50);
	ctx.fill();
}