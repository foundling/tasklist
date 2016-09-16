steal(

    'store/store.js', 
    'app/app.js', 
    'app/models/task_list.js',
    'app/models/task.js',

    function(store, app, TaskList, Task) {

        // localStorage initialization code here
        if (!store.get('tasklist')) {
            console.log('initializing tasklist localstorage for first time');
            store.set('tasklist', {
                'taskLists': [ new TaskList({}).serialize() ],
                'settings': {
                    colorscheme: 'default'
                }
            });
        } else {
            console.log('using existing tasklist localstorage data');
        }

        app();
    }
);
