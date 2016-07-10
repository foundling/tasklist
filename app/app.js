steal(
        // libs
        'can/view/stache/stache.js',

        // components
        './components/taskinput/taskinput.js',
        './components/dashboard/dashboard.js',
        './components/sidemenu/sidemenu.js',
        function(
            stache,

            /* can.Components don't need manual instantiation,
             * they get instantiated as soon as you bring them in 
             */
            TaskInput, 
            Dashboard 
        ) {

            $('#app').append( can.view('/app/app.stache') );

        }
);
