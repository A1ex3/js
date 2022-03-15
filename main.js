function draw() {

    // ��������� �������� canvas, ��������� � �������� Math.PI
    let canvas = document.getElementById('canva');
    let ctx = canvas.getContext('2d');
    let size = 75; // ��������� ������� X ����������

    setInterval(function () {
        ctx.beginPath();
        ctx.clearRect(0, 0, 600, 300); // ������� ������
        ctx.fillStyle = "pink"; // ���� �������
        ctx.rect(75, 75, size, size); // x, y, width, height
        ctx.fill();
        size++; // ���������� �������
        if (size > 225) {
            size = 75;
        }
    }, 60); // ������ ������ 60 �����������  
}