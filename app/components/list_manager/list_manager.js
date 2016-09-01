steal(

    'can',

    './models/list.js',

    './list_manager.stache!',


    function(
        can,
        List,
        ListView
    ) {

        can.Component.extend({
            tag: 'app-list-view',
            template: ListView, 
            viewModel: {
            },
            events: {
            }
        });
});
