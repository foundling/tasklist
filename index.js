steal(

    'store/store.js', 
    'app/app.js', 

    'app/models/task_list.js',
    'app/models/task.js',
    'app/models/themes.js',

    function(
        store, app, 
        TaskList, Task, 
        themes
    ) {

        var defaultAppData;

        // localStorage initialization code here
        if (!store.get('tasklist')) {
            appData = {
                'taskLists': [ new TaskList({}).serialize() ],
                'settings': { theme: themes[0] } // first is 'default' 
            };
            store.set('tasklist', appData);
        }

        app();

    }
);
