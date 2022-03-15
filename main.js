function draw() {

	// ��������� �������� canvas, ��������� � �������� Math.PI
	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	let pi = Math.PI;

	ctx.beginPath();// ������ ������ ����
	ctx.lineWidth = 7; // ������� �������
	ctx.strokeStyle = "green"; // ���� �������
	// ���������� ������ �����, ������, ��������� ����, �������� ����, ����������� �� ������� �������
	ctx.arc(100, 100, 75, 0, pi / 2, false);
	ctx.stroke();
}