steal(
    'can',
    'app/models/task/task.js',
    'app/models/tasklist/tasklist.js',
    './taskinput.css!',
    function(can, Task, TaskList) {

        return can.Component.extend({

            tag: 'task-input',
            template: can.view('/lib/taskinput/taskinput.stache'),
            viewModel: {
                currentList: new TaskList([ 

                    new Task({
                        name:       'task', 
                        notes:      'notes', 
                        complete:   false
                    })

                ]),
            },
            events: {
                'inserted': function(el, ev) {
                    console.log('taskinput inserted');
                }
            }
        });
});
