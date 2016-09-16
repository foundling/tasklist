steal(

    'can',
    'jquery',
    'jquery-ui',
    'node_modules/jquery-ui-dist/jquery-ui.css!',
    'node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',

    'app/models/task.js',

    './task_list.stache!',
    './task_list.less!',

    function(
        can, $, jqueryUI, jqueryUIStyles, touchPunch, 
        Task,
        ListView,
        taskListStyles
    ){
        var dragIndex; 
        var draggedTask;

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
                    var self = this;

                    $('app-task-list')
                        .draggable({
                            axis: 'y',
                            helper: 'clone',
                            snap: 'app-task-list',
                            stack: 'app-task-list',
                            scroll: true,
                            drag: function(ev) {
                                console.log('drag');
                            },
                            start: function(ev) {
                                var taskLists = self.viewModel.attr('taskLists'); 
                                dragIndex = $(ev.target).index();
                                if (taskLists.length < 2) {
                                    return false;
                                }
                                console.log('start');
                            },
                            stop: function(ev) {
                                console.log('stop');
                            }
                        });

                    // if target is a ul.task-list, do splice
                    $('ul.task-list')
                        .droppable({
                            greedy: true,
                            tolerance: 'fit',
                            drop: function(ev) {

                                /* Note: can't use 'app-task-list' selector for both .draggable and .droppable.
                                 * So I'm using 'app-task-list' for draggable, and it's child 'ul.task-list' 
                                 * for droppable.
                                 */
                                console.log('drop target: ',ev.target);

                                var dropIndex = $(ev.target).closest('app-task-list').index();
                                draggedTask = self.viewModel.attr('taskLists.' + dragIndex) 

                                console.log('dropIndex: ', dropIndex);
                                console.log('draggedTask', draggedTask);
                                // i'm copying here? 
                                self.viewModel.attr('taskLists').splice(dropIndex, 0, draggedTask);
                                self.viewModel.attr('taskLists').splice(dragIndex + 1, 1);

                            }
                        });

                    // if the target is a list-wrapper, put task at end
                    $('div.lists-wrapper')
                        .droppable({
                            greedy: true,
                            drop: function(ev) {

                                /* Note: can't use 'app-task-list' selector for both .draggable and .droppable.
                                 * So I'm using 'app-task-list' for draggable, and it's child 'ul.task-list' 
                                 * for droppable.
                                 */
                                
                                console.log('drop target: ',ev.target);
                                // if the target is a list-wrapper, put task at end
                                // if target is a ul.task-list, do splice
                                self.viewModel.attr('taskLists').push(draggedTask);
                                self.viewModel.attr('taskLists').splice(dragIndex, 1);
                            }
                        });

                },

                'i.add-task click': function(el, ev) {

                    var taskList = el.closest('.task-list');
                    var taskWrapper = $('.task-wrapper');
                    var taskHeight = taskWrapper.height();
                    var taskCount = taskWrapper.length; 

                    taskList.animate({ 
                        scrollTop: taskHeight * taskCount 
                    }, 'slow');

                },

                'input.task-list-title-input click, input.task-list-title-input touchstart': function(el, ev) {
                    ev.stopPropagation();
                    var taskIndex = el.closest('app-task-list').index();
                    var taskList = this.viewModel.attr('taskLists.' + taskIndex); 
                },
            }
        });
})
