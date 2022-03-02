
$(document).ready(function () {
    $(".clickable#java").click(function () {
        $(".javascript").toggle();
    });



    $(".clickable#op").click(function () {
        $(".operators").toggle();
    });
    $(".clickable#var").click(function () {
        $(".variables").toggle();
    });
    $(".clickable#naming").click(function () {
        $(".var-naming").toggle();
    });
    $(".clickable#fun").click(function () {
        $(".functions").toggle();
    });
    $(".clickable#met").click(function () {
        $(".methods").toggle();
    });
});