function draw() {

	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	ctx.stroke();
	ctx.fillStyle = "pink"; //���� �������
	ctx.beginPath();
	ctx.lineWidth = 5; // ������� �����
	// x,y,radius,startAngle,endAngle,anticlockwise
	ctx.arc(200, 200, 75, 0, 2 * Math.PI, true);
	ctx.stroke();
}