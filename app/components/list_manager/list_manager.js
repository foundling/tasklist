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
                        tasks: [ new TaskModel({ text: 'blank task' }) ] 
                    })
                ], 
                addNewList: function() {
                    this.taskLists.push( [ new TaskModel({ text: '' }) ]);
                }
            },
            events: {
                'inserted': function() {
                }
            }
        });
});
