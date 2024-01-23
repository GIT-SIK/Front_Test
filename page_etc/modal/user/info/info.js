/* 데이터 테스트 */
import { gridData } from './dummy.js';

/* 실행 영역 */
$(document).ready(function ($) {

    /* 모달 Open Close 영역 */
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


    /* Grid 영역 */
    var grid = new tui.Grid({
        el: document.getElementById('infoGrid'),
        data: gridData,
        scrollX: false,
        scrollY: false,
        columns: [
            {
                title: 'Id',
                name: 'id'
            },
            {
                title: 'Name',
                name: 'name'
            }
        ],
        rowHeaders: ['rowNum'],
        pageOptions: {
            useClient: true,
            perPage: 10
        }
    });


    /* 페이지 테스트 영역 */
    // const appendBtn = document.getElementById('appendBtn');
    // const prependBtn = document.getElementById('prependBtn');

    // const appendedData = {
    //     id: 359999,
    //     name: 'INPUT',
    // };

    // appendBtn.addEventListener('click', () => {
    //     grid.appendRow(appendedData);
    // });

    // prependBtn.addEventListener('click', () => {
    //     grid.prependRow(appendedData);
    // });


});



/* 모달 뷰 */
function viewInfoModal(bool) {
    if (bool == true) {
        $(".info-modal").show();
        $(".backon").show();
    } else {
        $(".info-modal").hide();
        $(".backon").hide();
    }

}