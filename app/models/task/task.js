steal(
        
    'can', 
    function(can) {

        var task = {
            name:       'task',
            notes:      '',
            complete:   true
        };

        return can.Map.extend(task);

})
