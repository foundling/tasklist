steal(
    'can',
    'can/view/stache/stache.js',
    function(can, stache) {

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
