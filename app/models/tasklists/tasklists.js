steal(
        
    'can', 
    function(can) {

        var tasklists = {
            tasklists:       'task',
            currentList:      '',
        };

        return can.Map.extend(tasklists);

})
