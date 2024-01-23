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

    /* row event */
    grid.on('dblclick', (e) => {
        let { rowKey } = e;
        if (rowKey === 0) {
            e.stop();
            return;
        }
        console.log(grid.getValue(rowKey, "id"));
    });

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