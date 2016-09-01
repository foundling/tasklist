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
            viewModel: {},
            events: {
                'inserted': function() {
                    console.log(this.viewModel);
                }
            }
        });
});
