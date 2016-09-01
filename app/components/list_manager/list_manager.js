steal(

    'can',

    './components/list/list.js',
    './components/task/task.js',

    './list_manager.stache!',

    function(
        can,
        List, Task,
        ListManagerView
    ) {

        can.Component.extend({
            tag: 'app-list-manager',
            template: ListManagerView, 
            viewModel: {
            },
            events: {
                'inserted': function() {
                    console.log('listManager inserted');
                }
            }
        });
});
