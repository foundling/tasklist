steal(

    'can',
    './dashboard.css!',
    function(can) {

        return can.Component.extend({
            tag: 'task-dashboard',
            template: can.view('/app/components/dashboard/dashboard.stache'),
            viewModel: {
                active: false,
            },
            events: {
                'inserted': function(el, ev) {
                    console.log('dashboard inserted');
                }
            }
        });
});
