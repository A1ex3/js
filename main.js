function draw() {

	// ��������� �������� canvas, ��������� � �������� Math.PI
	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	let pi = Math.PI;

	ctx.beginPath();// ������ ������ ����
	ctx.lineWidth = 7; // ������� �������
	ctx.strokeStyle = "green"; // ���� �������
	// ���������� ������ �����, ������, ��������� ����, �������� ����, ����������� �� ������� �������
	ctx.arc(150, 150, 75, 0, pi, false); // �� ������� ������� 
	ctx.stroke();
}