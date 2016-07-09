steal(
        // libs
        'can/view/stache/stache.js',

        // models
        './models/task/task.js',
        './models/tasklist/tasklist.js',

        // component
        '../lib/taskinput/taskinterface.js',
        function(
            stache,
            Task, TaskList,
            TaskInterface
        ) {

            var task = new Task({
                name:       'test', 
                complete:   false, 
                notes:      'notes'
            });

            var tasklist = new TaskList([ task ]);
            var taskInterfaceTemplate = can.stache('<task-input></task-input>');
            $('#app').append( taskInterfaceTemplate() ); 
        }
);
