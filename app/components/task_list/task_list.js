steal(

    'can',
    './task_list.stache!',

    function(
        can, 
        ListView
    ){
        can.Component.extend({
            tag: 'app-task-list',
            template: ListView,
            viewModel: {
                toggleOpen: function() {
                }
            },
            events: {}
        });
});
