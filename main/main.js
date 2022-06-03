$(document).ready(function ($) {
    var num = 4;
    var numTemp = 0;


    var auto = setInterval(function () {

        for (let i = 2; i <= num; i++) {
            $('.top > div:nth-child(' + i + ')').fadeOut();
        }
        $('.top > div:nth-child(' + numTemp + ')').fadeIn(1000);
        $('.top > div:nth-child(' + (numTemp + 1) + ')').fadeOut(1000);

        numTemp++;
        if (numTemp > 3) {
            $('.top > div:nth-child(' + 0 + ')').fadeIn();
            numTemp = 0;
        }
    }, 1000);





});