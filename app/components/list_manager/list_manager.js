steal(

    'can',
    'app/plugins/storage/storage.js',

    'app/models/task_list.js',
    'app/models/task.js',

    './list_manager.stache!',
    './list_manager.less!',



    function(
        can, storage,
        TaskList, Task,
        ListManagerView, ListManagerStyle
    ) {

        can.Component.extend({

            tag: 'app-list-manager',
            template: ListManagerView, 
            viewModel: {

                overflow: false,
                addNewList: function() {
                    this.attr('taskLists').push(new TaskList({ active: true }));
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

                    var taskListsFromLocalStorage = storage.get('taskLists').map(function(taskList) {
                        return new TaskList({
                            title: taskList.title,
                            active: taskList.active,
                            tasks: taskList.tasks.map(function(task) {
                                return new Task({
                                    text: task.text,
                                    complete: task.complete
                                });
                            })
                        });
                    });
                    this.viewModel.attr('taskLists', taskListsFromLocalStorage);

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
                    storage.set('taskLists', taskLists);
                },

                'i click': function() {
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
