function draw() {

	let canvas = document.getElementById('canva');
	let ctx = canvas.getContext('2d');
	// ���������� ������ ������ ����� X,Y
	ctx.moveTo(200, 100);
	// ������� ��������� ����� � ������������ ����� �����
	ctx.lineTo(500, 200);
	ctx.strokeStyle = "pink"; //���� �����
	ctx.lineWidth = "10"; //������� �����
	ctx.stroke(); // ������� �����

	// ���������� ������ ������ ����� X,Y
	ctx.moveTo(300, 100);
	ctx.lineTo(500, 50);
	ctx.stroke();
}