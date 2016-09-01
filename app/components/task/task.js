steal(

    'can',
    './task.stache!',

    function(
        can, 
        TaskView
    ){
        can.Component.extend({
            tag: 'app-task',
            template: TaskView,
            viewModel: {},
            events: {}
        });
});
