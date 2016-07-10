steal(
        // libs
        'can/view/stache/stache.js',

        // models
        './models/task/task.js',
        './models/tasklist/tasklist.js',
        './models/tasklists/tasklists.js',

        // components
        './components/taskinput/taskinput.js',
        './components/dashboard/dashboard.js',
        './components/sidemenu/sidemenu.js',
        './styles/vendor/font-awesome-4.6.3/css/font-awesome.css!',
        './main.less!',
        function(
            stache,
            Task,
            TaskList,
            TaskLists,

            /* can.Components don't need manual instantiation,
             * they get instantiated as soon as you bring them in 
             */
            TaskInput, 
            Dashboard 
        ) {

            var task = new Task({
                name:       'Task', 
                complete:   false, 
                notes:      'Task Notes'
            });

            var tasklist = new TaskList({ 
                name:   'Task List',
                tasks:  new can.List([ task ])
            });

            var tasklists = new TaskLists({
                tasklists: new can.List([ tasklist ]),
                currentList: tasklist 
            });

            var tpl = can.view('/app/app.stache');

            $('#app').append(tpl({ 
                tasklists: tasklists 
            }));

        }
);
