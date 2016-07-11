steal(
    'can',
    'app/models/task/task.js',
    'app/models/tasklist/tasklist.js',
    './taskinput.css!',
    function(can, Task, TaskList) {

        return can.Component.extend({

            tag: 'task-input',
            template: can.view('/app/components/taskinput/taskinput.stache'),
            viewModel: null,
            events: {
                'inserted': function(el, ev) {
                    console.log('taskinput inserted');
                }
            }
        });
});
