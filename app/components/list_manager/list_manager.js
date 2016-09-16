steal(

    'can',
    'store/store.js',

    'app/models/task_list.js',
    'app/models/task.js',

    './list_manager.stache!',
    './list_manager.less!',



    function(
        can, store,
        TaskList, Task,
        ListManagerView, ListManagerStyle
    ) {

        can.Component.extend({

            tag: 'app-list-manager',
            template: ListManagerView, 
            viewModel: {

                activeIndex: null,
                overflow: false,
                taskLists: null,
                addNewList: function() {

                    var newList = new TaskList({ active: true });
                    var taskLists = this.attr('taskLists');  
                    var activeIndex = this.attr('activeIndex');

                    taskLists.attr(activeIndex + '.active', false);
                    taskLists.push(newList);
                    taskLists.attr('activeIndex', taskLists.indexOf(newList));

                },

                removeList: function(index) {

                    var taskLists = this.attr('taskLists'); 
                    if (taskLists.length > 1) {
                        taskLists.splice(index, 1);
                    } else {
                        taskLists.attr(0 + '.title', 'New Task List');
                        taskLists.attr(0 + '.tasks').splice(1, taskLists.attr('0.tasks').length);
                        taskLists.attr(0 + '.tasks.0.text','New Task');
                    }


                }
            },
            events: {

                'inserted' : function() {

                    // make tasks sortable
                    $('div.lists-wrapper').sortable({
                        items: '> app-task-list',
                        axis: 'y'
                    });


                    // init storage
                    if (!store.get('tasklist')) {
                        console.log('initializing tasklist localstorage for first time');
                        store.set('tasklist', {
                            'taskLists': [ new TaskList({}).serialize() ],
                            'settings': {
                                colorscheme: 'default'
                            }
                        });
                    } else {
                        console.log('using existing tasklist localstorage data');
                    }

 
                    var taskLists = store.get('tasklist')['taskLists'].map(function(taskList) {
                        return new TaskList({
                            active: taskList.active,
                            tasks: taskList.tasks.map(function(task) {
                                return new Task({
                                    text: task.text,
                                    complete: task.complete
                                });
                            })
                        });
                    });

                    /* set last task list to active */
                    this.viewModel.attr('taskLists', taskLists);
                    var targetIndex = this.viewModel.attr('taskLists').length - 1;
                    this.viewModel.attr('activeIndex', targetIndex);

                    // init overflow
                    var taskLists = this.viewModel.attr('taskLists');
                    var overflowed = $('.task-list').height() * taskLists.length > $('.lists-wrapper').height();
                    this.viewModel.attr('overflow', overflowed);
                },

                // Scroll Events when adding new list or expanding list 

                'i.toggle-list-expand:last click': function() {
                    var listManager = $('.list-manager'); 
                    var amt = $('.task-list').height() * $('.task-list').length;
                    listManager.animate({ scrollTop: amt }, 'fast');
                },

                'i.add-list, i.add-task click': function() {
                    var listManager = $('.list-manager'); 
                    var amt = $('.task-list').height() * $('.task-list').length;
                    listManager.animate({ scrollTop: amt }, 'fast');
                },

                '{taskLists} change': function() {
                    /* update storage */
                    var taskLists = this.viewModel.attr('taskLists');
                    var appData = store.get('tasklist');
                    appData.taskLists = taskLists.serialize();
                    store.set('tasklist', appData);
                    console.log('saving tasklists to local storage ...');
                },

                'i click': function() {
                    console.log('click');
                    var taskLists = this.viewModel.attr('taskLists');

                    // refactor this. why won't reduce work on the heights array?
                    var heights = $('.task-list').map(function(index, el) {
                        return $(el).height();
                    });
                    var totalHeight = 0;
                    for (var i = 0; i < heights.length; ++i) {
                        totalHeight += heights[i];
                    }
                    var overflowed = totalHeight > $('.lists-wrapper').height();
                    this.viewModel.attr('overflow', overflowed);
                } 
            }
        });
});
