steal(function() {

    function h1(s) {
        return '# ' + s + '\n';
    }

    function listItem(s) {
        return '+ ' + s + '\n';
    }

    return function(tasklists) {

        return tasklists.map(function(tasklist) {
            var title = h1(tasklist.title);
            var tasks = tasklist.tasks.map(function(task) {
                return listItem(task.text); 
            });

            return [ title ].concat(tasks).join('');
        })
        .join('\n');

    };

});
