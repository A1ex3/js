$(document).ready(function () {
    $("#el1").resizable();
    $("#el1").draggable();

    $("#sort1").sortable();

    $("#el3").draggable();
    $("#el2").draggable();
    $("#drop1").droppable({
        over: function (event, ui) {
            ui.draggable.css("background-color", "#d7fa99");
        },
        out: function (event, ui) {
            ui.draggable.css("background-color", "#ecbfda");
        },
        drop: function (event, ui) {
            ui.draggable.css("display", "none");
            $(this).css("background-color", "#c4f66f");
            $(this).html("Перемещение завершено успешно.");
        }
    });
    $("#drop2").droppable({
        accept: "#el3",
        over: function (event, ui) {
            ui.draggable.css("background-color", "#d7fa99");
        },
        out: function (event, ui) {
            ui.draggable.css("background-color", "#ecbfda");
        },
        drop: function (event, ui) {
            ui.draggable.css("display", "none");
            $(this).css("background-color", "#c4f66f");
            $(this).html("Перемещение завершено успешно.");
        }
    });
});