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
        './components/menu/menu.js',
        './styles/vendor/font-awesome-4.6.3/css/font-awesome.css!',
        './main.less!',

        function(

            stache,
            Task, TaskList, TaskLists, 
            TaskInput, Dashboard 

        ) {

            var appTemplate = can.view('/app/app.stache');

            $('#app').append(appTemplate({ 
                tasklists: new TaskLists()
            }));

        }
);
