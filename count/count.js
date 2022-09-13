
$(document).ready(function(){
    
    /* Jquery 필수 */ 
    $({ val : 0 }).animate({ val : 2000 }, {
    duration: 2000,
    step: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num").text(num);
    },
    complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num").text(num);
    }
    });

    // $({ val : 0 }).animate({ val : 1.5 }, {
    //   duration: 1000,
    //   step: function() {
    //     var num = numberWithCommas(this.val.toFixed(1));
    //     $(".count_num2").text(num);
    //   },
    //   complete: function() {
    //     var num = numberWithCommas(this.val.toFixed(1));
    //     $(".count_num2").text(num);
    //   }
    // });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // ================================================

    let countBox = document.querySelector('.count'),
    count = 0;
    
    let counting = setInterval(function () {
    if (count == 2000) {
        clearInterval(counting);
        return false;
    }
    count += 100;
    countBox.innerHTML = new Intl.NumberFormat().format(count);
    }, 20);

})


