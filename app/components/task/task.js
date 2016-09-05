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
                editText: function(scope) {
                    var task = scope.attr('task');
                    if (task.attr('editingTask')) {
                        return;
                    }
                    task.attr('backupText', task.attr('text'));
                    task.attr('text', '');
                    task.attr('editingTask', !task.attr('editingTask'));
                },
                commitText: function(scope) {
                    var task = scope.attr('task');
                    if (!task.attr('editingTask')) {
                        return;
                    }
                    var text = task.attr('text').trim();
                    var newTitle = text ? text : task.attr('backupText');
                    task.attr('text', newTitle);
                    task.attr('editingTask', !task.attr('editingTask'));
                },
            },
            events: {}
        });
});
