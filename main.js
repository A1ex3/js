function draw() {

	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	ctx.strokeStyle = "gray"; //���� �������
	ctx.lineWidth = "10"; //������� �������
	ctx.rect(150, 75, 225, 150);
	ctx.stroke();
	ctx.fillStyle = "pink"; //���� �������
	ctx.fill();
}