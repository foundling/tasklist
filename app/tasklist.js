steal(
        '../lib/task/task.js',
        '../lib/tasklist/tasklist.js',
        function(
            Task, TaskList
        ) {

            var task = new Task({
                name: 'test', 
                complete: false, 
                notes: 'notes'
            });
            var tasklist = new TaskList([task]);
            console.log(tasklist);
        }
);
