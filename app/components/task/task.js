steal(

    'can',
    './task.stache!',
    './task.less!',

    function(
        can, 
        TaskView
    ){
        can.Component.extend({
            tag: 'app-task',
            template: TaskView,
            viewModel: {
                editing: false,
                toggleEditing: function() {
                    this.attr('editing', !this.attr('editing'));
                }

            },
            events: {}
        });
});
