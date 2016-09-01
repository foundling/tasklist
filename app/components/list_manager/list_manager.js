steal(

    'can',

    './models/list.js',
    './models/lists.js',

    './list_view.stache!',


    function(
        can,
        List, ListManager,
        ListView
    ) {

        can.Component.extend({
            tag: 'app-list-view',
            template: ListView, 
            viewModel: {
                define: {
                    listManager: {
                        value: new ListManager({
                            lists: new List();
                        })
                    },
                }
            },
            events: {
            }
        });
});
