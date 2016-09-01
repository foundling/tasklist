steal(

    'can',

    './models/list.js',
    './models/task.js',

    './list_manager.stache!',

    function(
        can,
        List, Task,
        ListManagerView
    ) {

        can.Component.extend({
            tag: 'app-list-manager',
            template: ListManagerView, 
            viewModel: {
                lists: new can.List([ 
                    new List() 
                ]),
                addNewList: function() {
                    this.lists.push( new List() );
                }
            },
            events: {
                'inserted': function() {
                    console.log('listManager inserted');
                }
            }
        });
});
