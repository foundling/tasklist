steal(

    'can',
    'jquery',
    'jquery-ui',
    'node_modules/jquery-ui-dist/jquery-ui.css!',
    'node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',

    'app/models/task.js',

    './task_list_single.stache!',
    './task_list_single.less!',

    function(
        can, $, jqueryUI, jqueryUIStyles, touchPunch, 
        Task,
        TaskListSingleView,
        taskListStyles
    ){

        var draggedTask;
        var startIndex;
        var dropFired;

        can.Component.extend({
            tag: 'app-task-list-single',
            template: TaskListSingleView,
            viewModel: {
                editing: false,
                addTask: function(scope) {
                    var taskList = scope.attr('singleTaskList.tasks');
                    taskList.push(new Task({}));
                    console.log(arguments);
                },
                removeTask: function(index) {
                    var taskLists = this.attr('taskLists');
                    var taskList = this.attr('taskList');
                    var tasks = taskList.attr('tasks');
                    if (tasks.length > 1) {
                        tasks.splice(index, 1);
                    } else if (taskLists.length > 1) {
                        taskLists.splice(taskLists.indexOf(taskList), 1);
                    }
                },
                editTitle: function(scope) {
                    var taskList = scope.attr('taskList');
                    if (taskList.attr('editing')){
                        return;
                    }
                    var title = taskList.attr('title');
                    taskList.attr('backupTitle', title);
                    taskList.attr('title', '');
                    this.attr('editing', true);
                },
                commitTitle: function(scope) {
                    var taskList = scope.attr('taskList');
                    var title = taskList.attr('title').trim();
                    var backupTitle = taskList.attr('backupTitle');
                    var newTitle = title ? title : backupTitle;
                    taskList.attr('title', newTitle);
                    this.attr('editing', false);
                },
            },
            events: {

                'inserted': function(el, ev) {
console.log('tasklist single data: ', this.viewModel.attr('taskList')); 
                },

                'input.task-list-title-input click': function(el, ev) {
                    var taskIndex = el.closest('app-task-list').index();
                    var taskList = this.viewModel.attr('taskLists.' + taskIndex); 
                }

            }
        });
})
