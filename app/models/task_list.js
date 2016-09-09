steal(

    'can',
    'app/models/task.js',

    function(
        can,
        Task
    ){

        var TaskList = can.Map({
            title:          'New Task List',
            backupTitle:    '',
            tasks: [ 
                new Task({}) 
            ]
        }); 

        return TaskList;

})
