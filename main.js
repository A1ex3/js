function draw() {

    const circle = function (x, y, radius, fillCircle) {
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2, false)// ����� arc ������� ����������
        if (fillCircle) {// ��������� ����� �� �������
            ctx.fill()//������ ���������� � �������� ������
        } else {
            ctx.stroke()//����� ������ �������
        }
    };

    function drawBee(x, y) {
        ctx.lineWidth = 2 // ������ �������
        ctx.strokeStyle = 'black' // ���� �������
        ctx.fillStyle = 'gold' // ���� �������

        circle(x, y, 8, true)
        circle(x, y, 8, false)
        circle(x - 5, y - 11, 5, false)
        circle(x + 5, y - 11, 5, false)
        circle(x - 2, y - 1, 2, false)
        circle(x + 2, y - 1, 2, false)
    };
    function update(coordinate) {
        let offset = Math.random() * 4 - 2 // ������� ���������� ��������
        coordinate += offset // ��������� ��������� �� �������� ��������

        if (coordinate > 200) { // �������� ���������� ����� � �������� ������
            coordinate = 200
        }
        if (coordinate < 0) {
            coordinate = 0
        }
        return coordinate // ����������� ����������
    };
    const canvas = document.getElementById('canva') // �������� �����
    const ctx = canvas.getContext('2d') // �������� �������� ���������

    let x = 100
    let y = 100

    setInterval(function () {
        ctx.clearRect(0, 0, 200, 200) // �������� ������

        drawBee(x, y) // ������� �����
        x = update(x) // ���������� �������� x
        y = update(y) // ���������� �������� y

        ctx.strokeRect(0, 0, 200, 200) // ������� ������ ������
    }, 30)

}