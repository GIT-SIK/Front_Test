$(document).ready(function ($) {

    $("#bt_login_link").on("click", function (event) {
        view_login_modal(true);
    });


    $("body").on("click", function (event) {
        if (event.target.className == 'backon') {
            view_login_modal(false);
        }
    });


    $(".close img").on("click", function (event) {
        view_login_modal(false);

    });

});



/* Signup 모달 */
function view_login_modal(bool) {
    if (bool == true) {
        $(".modal_login").show();
        $(".backon").show();
    } else {
        $(".modal_login").hide();
        $(".backon").hide();
    }

}