steal(
        'can',
        '../task/task.js',
        function(can, Task) {

            var tasklist = {
                tasks: new can.List([ new Task() ]),
                remaining: can.compute(function() {
                    var complete, total;
                    total = this.tasks.length;
                    complete = can.filter(this.tasks, function(task) {
                        return task.attr('complete');
                    }).length;

                    return total - complete;
                })
            };

            return can.Map.extend(tasklist);

});
