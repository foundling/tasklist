steal(

    'can',

    './task_list.stache!',
    './task_list.less!',

    function(
        can, 
        ListView
    ){
        can.Component.extend({
            tag: 'app-task-list',
            template: ListView,
            viewModel: {
                toggleOpen: function() {
                    this.attr('open', this.attr('open') === 'true' ? 'false' : 'true');
                },
                isActive: function(scope) {
                    var listManager = scope.attr('listManager');
                    var taskList = scope.attr('taskList');
                    return listManager.indexOf(taskList) === listManager.length - 1;
                },
                removeTaskList: function(index) {
                    console.log(index);
                }
            },
            events: {
                'inserted': function() {
                }
            }
        });
})
