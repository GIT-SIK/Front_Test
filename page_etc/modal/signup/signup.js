$(document).ready(function ($) {

    $("#bt_signup").on("click", function (event) {
        view_Signup_Modal(true);
    });


    $("body").on("click", function (event) {
        if (event.target.className == 'backon') {
            view_Signup_Modal(false);
        }
    });


    $(".signup_close img").on("click", function (event) {
        view_Signup_Modal(false);

    });

});



/* Signup 모달 */
function view_Signup_Modal(bool) {
    if (bool == true) {
        $(".signup_travel_modal").show();
        $(".backon").show();
    } else {
        $(".signup_travel_modal").hide();
        $(".backon").hide();
    }

}