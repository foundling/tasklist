steal(

        'can',
        '../task/task.js',

        function(

            can, 
            Task

        ) {

            var tasklist = {

                name: 'Task List', 
                tasks: new can.List([ new Task() ]),
                open: false,

                remaining: can.compute(function() {
                    var complete, total;

                    total = this.tasks.length;
                    complete = can.filter(this.tasks, function(task) {
                        return task.attr('complete');
                    }).length;
                    return total - complete;
                }),
                addTask: function() {
                    this.tasks.push(new Task());
                },
                toggleOpen: function() {
                    this.attr('open', !this.attr('open'));
                }

            };

            return can.Map.extend(tasklist);

});
