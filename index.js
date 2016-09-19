steal(

    'app/plugins/storage/storage.js',
    'app/app.js', 

    'app/models/task_list.js',
    'app/models/task.js',
    'app/models/themes.js',

    function(
        storage,
        app, 
        TaskList, Task, 
        themes
    ) {

        storage.init();
        app(storage);

    }
);
