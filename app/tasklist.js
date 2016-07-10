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

            $('#app').append( can.view('/app/main.stache') );

        }
);
