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
                lastTask: function(vm, scope) {
                    var task = vm.attr('task'); 
                    var tasks = this.attr('taskList.tasks');
                    var index = tasks.indexOf(task);
                    return index === tasks.length - 1;
                },
                editText: function(scope) {
                    var task = scope.attr('task');
                    task.attr('backupText', task.attr('text'));
                    task.attr('text', '');
                    this.attr('editing', true);
                },
                commitText: function(scope) {
                    var task = scope.attr('task');
                    var text = task.attr('text').trim();
                    var newTitle = text ? text : task.attr('backupText');
                    task.attr('text', newTitle);
                    this.attr('editing', false);
                },
            },
            events: {}
        });
});
