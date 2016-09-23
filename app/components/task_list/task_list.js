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
        var startIndex;
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

                    $('.drag-me')
                        .draggable({

                            axis: 'y',
                            helper: function(ev) { 
                                return $(ev.target).closest('ul.task-list');
                            },
                            snap: 'ul.task-list',
                            stack: 'ul.task-list',
                            scroll: true,

                            start: function(ev, ui) {
                                console.log($(ev.target));
                                console.log(ui.helper);

                                var taskLists = self.viewModel.attr('taskLists'); 
                                if (taskLists.length < 2) {
                                    return false;
                                }

                                // get dragged element's index
                                startIndex = $(ev.target).parent().index();
                                console.log('start: ', startIndex);

                                // add ui fx to helper
                                // ad ui fx to origin dragged task el
                                $(ui.helper).addClass('dragged-task');
                                $(ev.target).addClass('old-task-position');

                            },

                            stop: function(ev, ui) {
                                $(ui.helper).removeClass('dragged-task');
                                $(ev.target).removeClass('old-task-position');
                                startIndex = undefined;
                            }
                        });

                    /* DROP ZONES */

                    $('app-task-list')
                        .droppable({
                            greedy: true, // events don't bubble: provides way to separate two dropzone scopes.
                            tolerance: 'touch',
                            drop: function(ev, ui) {
                                var taskLists = self.viewModel.attr('taskLists');
                                var taskToMove = taskLists.attr(startIndex);
                                var stopIndex = $(ev.target).index();
                                var direction = stopIndex - startIndex;
                                var tail;

                                console.log('drop onto another task list.');
                                console.log('direction: ', direction);

                                if (direction > 0) {
                                    // cut out everything from the dropp index to the end, save it  
                                    tail = taskLists.splice(stopIndex);

                                    taskLists.push(taskToMove);
                                    for (var i = 0; i < tail.length; ++i) {
                                        taskLists.push(tail[i]);
                                    }
                                    taskLists.splice(taskLists.indexOf(taskToMove),1);
                                } else if (direction < 0) {
                                    taskToMove = taskLists.splice(startIndex, 1)[0];
                                    taskLists.splice(stopIndex, 0, taskToMove);
                                } 

                            }
                        });

                    $('div.extra-space')
                        .droppable({
                            greedy: true, // prevents event from bubbling up parent lists-wrapper
                            tolerance: 'touch',
                            drop: function(ev, ui) {
                                console.log('drop onto task list extra space.');
                                var taskLists = self.viewModel.attr('taskLists');

                                if (startIndex === taskLists.length - 1) {
                                    return;
                                } 


                                var taskLists = self.viewModel.attr('taskLists');
                                var taskList = taskLists.attr(startIndex);    
                                taskLists.push(taskList);
                                taskLists.splice(startIndex, 1);

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
                        if ($('ul.task-list').length > 1) {
                            $('.drag-handle').draggable('disable');
                            $('ul.task-list').eq(index + 1).addClass('offset-other-tasks');
                        }
                    } 
                    if (prop === 'open' && !newVal) {
                        if ($('ul.task-list').length > 1) {
                            $('.drag-handle').draggable('enable');
                            $('ul.task-list').eq(index + 1).removeClass('offset-other-tasks');
                        }
                    }
                }
            }
        });
})
