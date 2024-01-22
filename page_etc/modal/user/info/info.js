$(document).ready(function ($) {

    $("#infoModalOpenBtn").on("click", function (event) {
        viewInfoModal(true);
    });


    $("body").on("click", function (event) {
        if (event.target.className == 'backon') {
            viewInfoModal(false);
        }
    });


    $(".close-btn img").on("click", function (event) {
        viewInfoModal(false);

    });

});



/* Signup 모달 */
function viewInfoModal(bool) {
    if (bool == true) {
        $(".info-modal").show();
        $(".backon").show();
    } else {
        $(".info-modal").hide();
        $(".backon").hide();
    }

}