steal(
        // libs
        'can/view/stache/stache.js',

        // components
        '../lib/taskinput/taskinput.js',
        '../lib/dashboard/dashboard.js',
        function(
            stache,

            /* can.Components don't need manual instantiation,
             * they get instantiated as soon as you bring them in 
             */
            TaskInput, 
            Dashboard 
        ) {

            var taskInputTemplate = can.stache('<task-input></task-input>');
            $('#app').append( taskInputTemplate() ); 
            
            var dashboardTemplate = can.stache('<task-dashboard></task-dashboard>');
            $('#app').append( dashboardTemplate() );
        }
);
