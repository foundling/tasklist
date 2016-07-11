steal(

    'can',
    './dashboard.less!',
    function(can) {

        return can.Component.extend({
            tag: 'task-dashboard',
            template: can.view('/app/components/dashboard/dashboard.stache'),
            viewModel: {
                active: false,
                toggleDashboard: function() {
                    this.attr('active', !this.attr('active'));
                },
            },
            events: {
                'inserted': function(el, ev) {
                    console.log('dashboard inserted');
                }
            }
        });
});
