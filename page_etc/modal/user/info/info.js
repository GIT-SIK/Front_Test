/* 데이터 테스트 */
import { infoData } from './dummy.js';

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
        data: infoData,
        scrollX: false,
        scrollY: false,
        columns: [
            {
                header: '등록일자',
                name: 'registrationDT'
            },
            {
                header: '개수',
                name: 'productQty'
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
        console.log(grid.getValue(rowKey, "registrationDT")); /* colname 설정할 것 */
    });

});



/* 모달 뷰 */
function viewInfoModal(bool) {
    if (bool) {
        $(".info-modal").show();
        $(".backon").show();
    } else {
        $(".info-modal").hide();
        $(".backon").hide();
    }

}