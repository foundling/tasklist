steal(
    'can',
    'can/route/route.js',
    'can/route/pushstate/pushstate.js',
    'can/control/route/route.js',
    function(can, route, pushstate, ControlRouter ) {

        // https://canjs.com/docs/can.Control.route.html#dad
        var Router = can.Control({
            " route": function() {
            },

            ":type route" : function(data) {
                console.log(data);
            },

            "todo/:id route" : function(data) {
                console.log(data);
            }
        });
        var router = new Router(window);

        /*
    vurls: {
            'title':        'landing',
            'singlelist':   'one',
            'multilist':    'all',
            'settings':     'settings'
        },
        */

});
