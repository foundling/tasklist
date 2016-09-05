steal(

    'can',

    'app/models/task_list.js',
    'app/models/task.js',

    './list_manager.stache!',
    './list_manager.less!',

    function(
        can,
        TaskList,
        Task,
        ListManagerView
    ) {

        can.Component.extend({
            tag: 'app-list-manager',
            template: ListManagerView, 
            viewModel: {
                taskLists: [ 
                    new TaskList({ 
                        active: false,
                        title: 'Camping Trip',
                        backupTitle: '',
                        tasks: [ 
                            new Task({ text: 'Buy a Tent.' }), 
                            new Task({ text: 'Get a Map.' }), 
                            new Task({ text: 'Get Gas.' })
                        ] 
                    })
                ], 
                addNewList: function() {
                    var newList = new TaskList({ 
                        title: 'New List',
                        tasks: [ new Task({ text: 'new task' }) ] 
                    });
                    this.taskLists.push(newList)
                },
                removeList: function(index) {
                    this.attr('taskLists').splice(index,1);
                }

            },
            events: {
            }
        });
});
