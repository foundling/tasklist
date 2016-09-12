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
            viewModel: {
                toggleSettings: function() {
                    this.attr('settingsActive', !this.attr('settingsActive'));
                } 

            },
            events: {
                'i.to-top click': function() {
                    $('.list-manager').animate({ scrollTop: 0 });
                }

            }
        });

});
