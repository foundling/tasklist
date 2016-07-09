steal(
        './models/task/task.js',
        './models/tasklist/tasklist.js',

        '../lib/taskinput/taskinput.js',
        function(
            Task, TaskList,
            TaskInput
        ) {

            var task = new Task({
                name:       'test', 
                complete:   false, 
                notes:      'notes'
            });

            var tasklist = new TaskList([ task ]);
            $('#app').append(can.stache('<task-input></task-input>'));
        }
);
