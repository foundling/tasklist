steal(
    'can',
    function(can) {

        return can.Component.extend({
            tag: 'task-input',
            template: can.view('/lib/taskinput/taskinput.stache'),
            viewModel: {
            },
            events: {
                'inserted': function(el, ev) {
                    console.log('taskinput inserted');
                }
            }
        });
});
