steal(

    'can',
    './header.stache!',
    './header.less!',

    function(can, headerView) {

        can.Component.extend({
            tag: 'app-header',
            template: headerView,
            viewModel: {
                title: 'Your Lists',
            },
            events: {
                'inserted': function() {
                    console.log('app-header inserted');
                } 
            }
        });
});
