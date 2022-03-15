function draw() {

	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = "blue";
	ctx.lineWidth = "30";
	ctx.moveTo(50, 150);
	ctx.lineTo(150, 50);
	ctx.lineTo(200, 150);
	ctx.lineTo(50, 150);
	ctx.lineCap = "round";

	ctx.stroke();
}