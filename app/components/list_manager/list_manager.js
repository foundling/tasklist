steal(

    'can',

    'app/models/task_list.js',
    'app/models/task.js',

    './list_manager.stache!',
    './list_manager.less!',

    function(
        can,
        TaskListModel,
        TaskModel,
        ListManagerView
    ) {

        can.Component.extend({
            tag: 'app-list-manager',
            template: ListManagerView, 
            viewModel: {
                overflow: 'true',
                taskLists: new can.List([ 
                    new TaskListModel({ 
                        title: 'Camping Trip',
                        tasks: [ 
                            new TaskModel({ text: 'Buy a Tent.' }), 
                            new TaskModel({ text: 'Get a Map.' }), 
                            new TaskModel({ text: 'Get Gas.' })
                        ] 
                    }),
                    new TaskListModel({ 
                        title: 'Music List',
                        tasks: [ 
                            new TaskModel({ text: 'Short Guitar Cables X4.' }), 
                            new TaskModel({ text: 'Midi Cables.' })
                        ] 
                    }),
                    new TaskListModel({ 
                        title: 'Car Stuff',
                        tasks: [ 
                            new TaskModel({ text: 'Register Car.' }), 
                            new TaskModel({ text: 'Follow up on Claim.' }) 
                        ] 
                    })
                ]), 
                addNewList: function() {
                    var newList = new TaskListModel({ 
                        title: 'New List',
                        tasks: [ new TaskModel({ text: 'new task' }) ] 
                    });
                    this.taskLists.push(newList)
                }

            },
            events: {
                'inserted': function() {
                    console.log(this.viewModel);
                }
            }
        });
});
