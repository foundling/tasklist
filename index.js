steal(

    'store/store.js', 
    'app/app.js', 

    'app/models/task_list.js',
    'app/models/task.js',
    'app/models/colorschemes.js',

    function(
        store, app, 
        TaskList, Task, 
        colorschemes
    ) {

        var defaultAppData;

        // localStorage initialization code here
        if (!store.get('tasklist')) {
            defaultAppData = {
                'taskLists': [ new TaskList({}).serialize() ],
                'settings': { colorscheme: colorschemes[0] } // first is 'default' 
            };
            store.set('tasklist', defaultAppData);
        }

        app();

    }
);
