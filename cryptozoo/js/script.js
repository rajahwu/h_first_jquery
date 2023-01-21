$("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
});

$("#type_select").buttonset();

$("#slide_dist").slider({
    value: 0,
    min: 0,
    max: 500,
    step: 10,
    orientation: "horizontal",
    slide: function(event, ui) {
        $("#distance").val(ui.value);
    }
});

$("#slide_weight").slider({
    value: 0,
    min: 0,
    max: 5000,
    step: 5,
    orientation: "horizontal",
    slide: function(event, ui) {
        $("#weight").val(ui.value);
    }
});

$("#slide_height").slider({
    value: 0,
    min: 0,
    max: 20,
    step: 1,
    orientation: "horizontal",
    slide: function(event, ui) {
        $("#height").val(ui.value);
    }
});

$("#slide_latitude").slider({
    value: 0,
    min: -90,
    max: 90,
    step: 0.00001,
    orientation: "horizontal",
    slide: function(event, ui) {
        $("#latitude").val(ui.value);
    }
});

$("#slide_longitude").slider({
    value: 0,
    min: -180,
    max: 180,
    step: 0.00001,
    orientation: "horizontal",
    slide: function(event, ui) {
        $("#longitude").val(ui.value);
    }
});

$("#red").slider({
    orientation: "horizonal",
    range: "min",
    max: 255,
    value: 175,
    slide: refreshSwatch,
    change: refreshSwatch
});
$("#green").slider({
    orientation: "horizonal",
    range: "min",
    max: 255,
    value: 175,
    slide: refreshSwatch,
    change: refreshSwatch
});
$("#blue").slider({
    orientation: "horizonal",
    range: "min",
    max: 255,
    value: 175,
    slide: refreshSwatch,
    change: refreshSwatch
});

refreshSwatch();

$("button:submit").button();

function refreshSwatch() {
    const red = $("#red").slider("value");
    const green = $("#green").slider("value");
    const blue = $("#blue").slider("value");
    const swatch_rgb = `rgb(${red},${green},${blue})`;
    $("#swatch").css("background-color", swatch_rgb);
    $("#red_val").val(red);
    $("#green_val").val(green);
    $("#blue_val").val(blue);
}