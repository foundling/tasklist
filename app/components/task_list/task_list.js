steal(

    'can',

    'app/models/task.js',
    './task_list.stache!',
    './task_list.less!',

    function(
        can, 
        Task,
        ListView
    ){
        can.Component.extend({
            tag: 'app-task-list',
            template: ListView,
            viewModel: {
                toggleOpen: function() {
                    var newState = this.attr('open') === 'true' ? 'false' : 'true';
                    this.attr('open', newState);
                },
                isActive: function(scope) {
                    console.log(scope);
                    var listManager = scope.attr('listManager');
                    var taskList = scope.attr('taskList');
                    var index = listManager.indexOf(taskList);
                    return index === listManager.length - 1;
                },
                addNewTask: function(scope) {
                    var taskList = scope.attr('taskList');
                    var tasks = taskList.attr('tasks');
                    tasks.push(new Task({})); 
                },
                editTitle: function(scope) {
                    var taskList = scope.attr('taskList');
                    if (taskList.attr('editing')) {
                        return;
                    }
                    taskList.attr('backupTitle', taskList.attr('title'));
                    taskList.attr('title', '');
                    taskList.attr('editing', !taskList.attr('editing'));
                },
                commitTitle: function(scope) {
                    var taskList = scope.attr('taskList');
                    if (!taskList.attr('editing')) {
                        return;
                    }
                    var title = taskList.attr('title').trim();
                    var newTitle = title ? title : taskList.attr('backupTitle');
                    taskList.attr('title', newTitle);
                    taskList.attr('editing', !taskList.attr('editing'));
                },

            },
            events: {
            }
        });
})
