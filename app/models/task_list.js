steal(

    'can',
    'app/models/task.js',

    function(
        can,
        Task
    ){

        return can.Map({
            active: false,
            title: 'New Task List',
            backupTitle: '',
            tasks: [ 
                new Task()
            ],   
            editingList: false
        }); 

})
