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
                taskLists: [ 
                    new TaskListModel({ 
                        title: 'New List',
                        tasks: [ new TaskModel({ text: 'new task' }) ], 
                    })
                ], 
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
                }
            }
        });
});
