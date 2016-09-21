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

        var draggedTask;
        var draggedIndex;
        var dropFired;

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

                    /* DRAG ZONES */
                    $('app-task-list')
                        .draggable({

                            axis: 'y',
                            helper: 'clone',
                            snap: 'app-task-list',
                            stack: 'app-task-list',
                            scroll: true,

                            drag: function(ev, ui) {
                            },

                            start: function(ev, ui) {

                                var taskLists = self.viewModel.attr('taskLists'); 
                                if (taskLists.length < 2) {
                                    return false;
                                }

                                // get dragged element's index
                                draggedIndex = $(ev.target).index();
                                console.log(draggedIndex);

                                // add ui fx to helper
                                // ad ui fx to origin dragged task el
                                $(ui.helper).find('ul.task-list').addClass('dragged-task');
                                $(ev.target).find('ul.task-list').addClass('old-task-position');

                            },

                            stop: function(ev, ui) {
                                $(ui.helper).find('ul.task-list').removeClass('dragged-task');
                                $(ev.target).find('ul.task-list').remove('old-task-position');
                            }
                        });

                    /* DROP ZONES */

                    /* Notes: 
                     
                     * 1. I can't currently use 'app-task-list' selector for both .draggable and .droppable.
                     * So I'm using 'app-task-list' for draggable, and it's child 'ul.task-list' 
                     * for droppable.
                     
                     * 2. Note: two drop zones: the list wrapper to add task to end of list and
                     * ul.task-list as the task to drop on and do the swap etc.
                     */

                    $('ul.task-list')
                        .droppable({
                            greedy: true, // events don't bubble: provides way to separate two dropzone scopes.
                            tolerance: 'touch',
                            drop: function(ev, ui) {
                                console.log('drop onto another task list.');
                            }
                        });

                    $('div.lists-wrapper')
                        .droppable({
                            greedy: true, // prevents event from bubbling up parent lists-wrapper
                            tolerance: 'touch',
                            drop: function(ev, ui) {
                                console.log('drop onto task list extra space.');

                                var taskLists = self.viewModel.attr('taskLists');
                                var taskList = taskLists.attr(draggedIndex);    
                                taskLists.push(taskList);
                                taskLists.splice(draggedIndex, 1);

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
                '{viewModel} change': function(map, obj, prop, how, newVal, oldVal) {
                    // to keep task lists (when contracted) to fit inside space evently,
                    // need to toggle task list height to auto when expanded.
                    // otherwise it should be a calc of height / n.
                    var index = this.viewModel.attr('taskLists').indexOf(this.viewModel.attr('taskList'));
                    if (prop === 'open' && newVal) {
                        $('ul.task-list').eq(index).addClass('height-expanded');
                    } 
                    if (prop === 'open' && !newVal) {
                        $('ul.task-list').eq(index).removeClass('height-expanded');
                    }
                }
            }
        });
})
