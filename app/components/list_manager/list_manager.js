steal(

    'can',

    'app/models/task_list.js',
    'app/models/task.js',

    './list_manager.stache!',
    './list_manager.less!',



    function(
        can,
        TaskList, Task,
        ListManagerView, ListManagerStyle
    ) {

        can.Component.extend({

            tag: 'app-list-manager',
            template: ListManagerView, 
            viewModel: {

                activeIndex: null,
                overflow: false,
                taskLists: [ 

                    new TaskList({ 

                        active: false,
                        title: 'Camping Trip',
                        tasks: [ 

                            new Task({ text: 'Buy a Tent.' }), 
                            new Task({ text: 'Get a Map.' }), 
                            new Task({ text: 'Get Gas.' })
                        ] 
                    })
                ], 

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

                    /* set last task list to active */
                    var taskLists = this.viewModel.attr('taskLists');
                    var targetIndex = taskLists.length - 1;
                    this.viewModel.attr('activeIndex', targetIndex);

                    var taskLists = this.viewModel.attr('taskLists');
                    can.store.set('tasklist', taskLists.serialize());
                    console.log('init tasklist storage', can.store.get('tasklist'));
setTimeout(function () {   window.scrollTo(0, 1); }, 1000);

                },

                // Scroll Events when adding new list or expanding list 

                'i.toggle-list-expand:last click': function() {
                    var listManager = $('.list-manager'); 
                    var amt = $('.task-list').height() * $('.task-list').length;
                    listManager.animate({ scrollTop: amt }, 'fast');
                },

                'i.add-list click' : function() {
                    var listManager = $('.list-manager'); 
                    var amt = $('.task-list').height() * $('.task-list').length;
                    listManager.animate({ scrollTop: amt }, 'fast');
                },

                '{taskLists} change': function() {
                    var taskLists = this.viewModel.attr('taskLists');
                    can.store.set('tasklist', taskLists.serialize());
                    console.log('update tasklist storage', can.store.get('tasklist'));
                }
            }
        });
});
