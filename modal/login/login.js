$(document).ready(function ($) {

    $("#bt-loginlink").on("click", function (event) {
        view_login_modal(true);
    });


    $("body").on("click", function (event) {
        if (event.target.className == 'backon') {
            view_login_modal(false);
        }
    });


    $(".img-close img").on("click", function (event) {
        view_login_modal(false);

    });

});



/* Signup 모달 */
function view_login_modal(bool) {
    if (bool == true) {
        $(".modal-login").show();
        $(".backon").show();
    } else {
        $(".modal-login").hide();
        $(".backon").hide();
    }

}