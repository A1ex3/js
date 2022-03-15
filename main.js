function draw() {

	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	ctx.strokeStyle = "gray"; //цвет обводки
	ctx.lineWidth = "10"; //толщина обводки
	ctx.rect(150, 75, 225, 150);
	ctx.stroke();
	ctx.fillStyle = "pink"; //цвет заливки
	ctx.fill();
}