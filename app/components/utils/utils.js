steal(

    'can',
    './utils.stache!',
    './utils.less!',

    function(
        can, 
        utilsView
    ) {

        can.Component.extend({
            tag: 'app-utils',
            template: utilsView,
            viewModel: {},
            events: {
                'inserted': function() {
                } 
            }
        });
});
