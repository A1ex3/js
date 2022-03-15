function draw() {

	// ��������� �������� canvas, ��������� � �������� Math.PI
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


	ctx.beginPath();// ������ ������ ����
	ctx.lineWidth = 7; // ������� �������
	ctx.strokeStyle = "green"; // ���� �������
	ctx.moveTo(75, 75); // ���������� ��������� �����
	ctx.quadraticCurveTo(100, 150, 300, 50); // ���������� ����� ����������� � �������� �����
	ctx.stroke();
}