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
                    var taskList = this.attr('taskList');
                    var tasks = taskList.attr('tasks');
                    if (tasks.length > 1) {
                        tasks.splice(index, 1);
                    }
                    else {
                        tasks.attr(index + '.text', '');
                    }
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
                },

                'i.add-task click': function(el, ev) {

                    var taskList = el.closest('.task-list');
                    var taskWrapper = $('.task-wrapper');
                    var taskHeight = taskWrapper.height();
                    var taskCount = taskWrapper.length; 

                    taskList.animate({ 
                        scrollTop: taskHeight * taskCount 
                    }, 'slow');

                }

            }
        });
})
