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
                activeIndex: null,
                overflow: null,
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

                    /* set list at active index to active=false
                     * set last list to active=true
                     */
                    
                    var taskLists = this.attr('taskLists');  
                    var activeIndex = this.attr('activeIndex');
                    var newList = new TaskList({ active: true });

                    taskLists.attr(activeIndex + '.active', false);
                    taskLists.push(newList)
                    taskLists.attr('activeIndex', taskLists.indexOf(newList));

                },
                removeList: function(index) {

                    var taskLists = this.attr('taskLists'); 
                    taskLists.splice(index, 1);

                    if (taskLists.length) {
                        taskLists.attr(taskLists.length + '.active' , true);
                    }
                }
            },
            events: {
                'inserted' : function() {
                    /* set last task list to active */
                    var taskLists = this.viewModel.attr('taskLists');
                    var targetIndex = taskLists.length - 1;
                    this.viewModel.attr('activeIndex', targetIndex);
                },
                '{taskLists} change': function() {
                    var diff = $('.list-manager').height() - $('.lists-wrapper').height();
                    var overflowed = diff < 0 ? true : false; 
                    this.viewModel.attr('overflow', overflowed);

                }
            }
        });
});
