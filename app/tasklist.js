steal(
        'can/view/stache/stache.js',
        './models/task/task.js',
        './models/tasklist/tasklist.js',
        '../lib/taskinput/taskinput.js',
        function(
            stache,
            Task, TaskList,
            TaskInput
        ) {

            var task = new Task({
                name:       'test', 
                complete:   false, 
                notes:      'notes'
            });

            var tasklist = new TaskList([ task ]);
            var inputTemplate = can.stache('<task-input></task-input>');
            $('#app').append( inputTemplate() ); 
        }
);
