steal(

    'can',
    './dashboard.less!',
    function(can) {

        return can.Component.extend({
            tag: 'task-dashboard',
            template: can.view('/app/components/dashboard/dashboard.stache'),
            viewModel: {
                dashboardActive: false,
                toggleDashboard: function() {
                    this.attr('dashboardActive', !this.attr('dashboardActive'));
                },
            },
            events: {
                'inserted': function(el, ev) {
                    console.log('dashboard inserted');
                }
            }
        });
});
