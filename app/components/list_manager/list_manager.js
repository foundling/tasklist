steal(

    'can',

    './list_manager.stache!',

    function(
        can,
        ListManagerView
    ) {

        can.Component.extend({
            tag: 'app-list-manager',
            template: ListManagerView, 
            viewModel: {
                taskLists: null
            },
            events: {
                'inserted': function() {
                    console.log('listManager inserted');
                }
            }
        });
});
