steal(

    'can',
    './dashboard.stache!',
    './dashboard.less!',

    function(
        can, 
        dashboardView
    ) {

        can.Component.extend({
            tag: 'app-dashboard',
            template: dashboardView,
            overlayIsActive: false,
            viewModel: {},
            events: {}
        });

});
