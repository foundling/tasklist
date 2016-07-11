steal(
        
    'can', 
    '../task/task.js',
    '../tasklist/tasklist.js',
    function(can, Task, TaskList) {

        var tasklist = new TaskList({
            name: 'Task List',
        });

        var tasklists = {
            tasklists:      new can.List([ tasklist ]), 
            currentList:    tasklist,
            addTaskList: function() {
                var newList = new TaskList({ 
                    tasks: new Task() 
                });
                this.attr('currentList', newList);
                this.attr('tasklists').push(newList);
            }
        };

        return can.Map.extend(tasklists);

})
