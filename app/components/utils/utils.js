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
            viewModel: {
                title: "",
            },
            events: {
                'inserted': function() {
                } 
            }
        });
});
