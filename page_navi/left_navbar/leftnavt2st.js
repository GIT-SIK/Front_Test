$(document).ready(function ($) {

/* transition 액션이 지속되는 경우가 발생함 */
/* transition 액션을 없애고 만들거나 유지하는 방법을 찾아야함 */

const tg = localStorage.getItem('tg');
if(tg===null || tg==1) {
    $("#sidebar").addClass("sideon");
} else {
    $("#sidebar").removeClass("sideon");
}

    $("#btn-toggle").on("click", function () {
        $("#sidebar").toggleClass("sideon");
        if($("#sidebar").hasClass("sideon")) {
            localStorage.setItem('tg', 1);
        } else {
            localStorage.setItem('tg', 0);
        }
    });

});