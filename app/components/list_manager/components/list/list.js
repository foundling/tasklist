steal(

    'can',

    './models/list.js',
    './list.stache!',

    function(
        can, 
        List, ListView
    ){
        can.Component.extend({
            tag: 'app-list',
            template: ListView,
            viewModel: new List(),
            events: {}
        });
});
