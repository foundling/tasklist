steal(

    'can',

    './task_list.stache!',

    function(
        can, 
        ListView
    ){
        can.Component.extend({
            tag: 'app-list',
            template: ListView,
            viewModel: {},
            events: {}
        });
});
