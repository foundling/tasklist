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
                    var newState = this.attr('open') === 'true' ? 'false' : 'true';
                    this.attr('open', newState);
                },
                isActive: function(scope) {
                    var listManager = scope.attr('listManager');
                    var taskList = scope.attr('taskList');
                    return listManager.indexOf(taskList) === listManager.length - 1;
                },
                removeTaskList: function(scope) {
                    var listManager = scope.attr('listManager');
                    var taskList = scope.attr('taskList');
                    var index = listManager.indexOf(taskList);
                    listManager.splice(index,1);
                },
                toggleEdit: function(scope) {
                    console.log(scope.attr('taskList'));
                },

            },
            events: {
                'inserted': function() {
                }
            }
        });
})
