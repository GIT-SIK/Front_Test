import { gridData } from './data/dummy-d.js';

document.addEventListener('DOMContentLoaded', function () {
    var grid = new tui.Grid({
        el: document.getElementById('grid'),
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
        ]
    });
});