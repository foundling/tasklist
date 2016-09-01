steal(

    'can',
    './models/task.js',
    './task.stache!',

    function(
        can, 
        Task, 
        TaskView
    ){
        can.Component.extend({
            tag: 'app-task',
            template: TaskView,
            viewModel: new Task(),
            events: {}
        });
});
