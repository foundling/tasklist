steal(
        // libs
        'can/view/stache/stache.js',

        // components
        './components/taskinput/taskinput.js',
        './components/dashboard/dashboard.js',
        './components/sidemenu/sidemenu.js',
        './styles/vendor/font-awesome-4.6.3/css/font-awesome.css!',
        './main.less!',
        function(
            stache,

            /* can.Components don't need manual instantiation,
             * they get instantiated as soon as you bring them in 
             */
            TaskInput, 
            Dashboard 
        ) {

            var tpl = can.view('/app/app.stache');
            $('#app').append(tpl());

        }
);
