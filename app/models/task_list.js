steal(
    'can',
    'app/models/task.js',
    function(
        can,
        Task
    ){

        return can.Map({
            title: 'New Task List',
            backupTitle: '',
            tasks: [ 
                new Task({ text: 'New Task' })
            ]   
        }); 

})
