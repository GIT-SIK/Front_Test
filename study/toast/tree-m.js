document.addEventListener('DOMContentLoaded', function () {
    var data = [
        {
            id: 1,
            name: 'Root',
            _attributes: { expanded: true, },
            _children: [
                { id: 2, name: 'CN1' },
                { id: 3, name: 'CN2' }
            ]
        }
    ];

    var grid = new tui.Grid({
        el: document.getElementById('grid'),
        data: data,
        rowHeaders: ['checkbox'],
        treeColumnOptions: {
            name: 'id',
            useCascadingCheckbox: true
        },
        columns: [
            { header: 'ID', name: 'id', align: 'center' },
            { header: 'Node Name', name: 'name' }
        ]
    });

    grid.on('expand', ev => {
        const { rowKey } = ev;
        const descendantRows = grid.getDescendantRows(rowKey);

        console.log('rowKey: ' + rowKey);
        console.log('descendantRows: ' + descendantRows);

        if (!descendantRows.length) {
            grid.appendRow(
                {
                    name: 'dynamic loading data',
                    _children: [
                        {
                            name: 'leaf row'
                        },
                        {
                            name: 'internal row',
                            _children: []
                        }
                    ]
                },
                { parentRowKey: rowKey }
            );
        }
    });


    grid.on('collapse', ev => {
        const { rowKey } = ev;
        const descendantRows = grid.getDescendantRows(rowKey);

        console.log('rowKey: ' + rowKey);
        console.log('descendantRows: ' + descendantRows);
    });
});


