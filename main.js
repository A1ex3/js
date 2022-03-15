function draw() {

    const circle = function (x, y, radius, fillCircle) {
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2, false)// метод arc создает окружность
        if (fillCircle) {// проверяем верно ли условие
            ctx.fill()//рисуем окружность с заливкой цветом
        } else {
            ctx.stroke()//иначе рисуем обводку
        }
    };

    function drawBee(x, y) {
        ctx.lineWidth = 2 // ширина контура
        ctx.strokeStyle = 'black' // цвет обводки
        ctx.fillStyle = 'gold' // цвет заливки

        circle(x, y, 8, true)
        circle(x, y, 8, false)
        circle(x - 5, y - 11, 5, false)
        circle(x + 5, y - 11, 5, false)
        circle(x - 2, y - 1, 2, false)
        circle(x + 2, y - 1, 2, false)
    };
    function update(coordinate) {
        let offset = Math.random() * 4 - 2 // формула случайного смещения
        coordinate += offset // изменение координат на величину смещения

        if (coordinate > 200) { // проверка нахождения пчелы в пределах холста
            coordinate = 200
        }
        if (coordinate < 0) {
            coordinate = 0
        }
        return coordinate // возвращение координаты
    };
    const canvas = document.getElementById('canva') // получаем холст
    const ctx = canvas.getContext('2d') // получаем контекст рисования

    let x = 100
    let y = 100

    setInterval(function () {
        ctx.clearRect(0, 0, 200, 200) // очищение холста

        drawBee(x, y) // позиция пчелы
        x = update(x) // обновление значения x
        y = update(y) // обновление значения y

        ctx.strokeRect(0, 0, 200, 200) // обводка границ холста
    }, 30)

}