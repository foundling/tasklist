steal(
        'can',
        '../task/task.js',
        function(can, Task) {

            var tasklist = {
                name: '', 
                tasks: null,
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
