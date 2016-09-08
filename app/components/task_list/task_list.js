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
                open: false,
                active: false,
                editing: false,
                toggleOpen: function() {
                    this.attr('open', !this.attr('open'));
                },
                addTask: function(scope) {
                    var tasks = scope.attr('taskList.tasks');
                    tasks.push(new Task({}));
                },
                removeTask: function(index) {
                    this.attr('taskList.tasks').splice(index, 1);
                },
                editTitle: function(scope) {
                    var taskList = scope.attr('taskList');
                    taskList.attr('backupTitle', taskList.attr('title'));
                    taskList.attr('title', '');
                    this.attr('editing', true);
                },
                commitTitle: function(scope) {
                    var taskList = scope.attr('taskList');
                    var title = taskList.attr('title').trim();
                    var newTitle = title ? title : taskList.attr('backupTitle');
                    taskList.attr('title', newTitle);
                    this.attr('editing', false);
                }

            },
            events: {
                '{taskList} change': function(newTaskList, ev, changedProp, action) {

                }
            }
        });
})
