steal(
        
    'can', 
    function(can) {

        var task = {
            name:       'task',
            complete:   true,
            notes:      ''
        };

        return can.Map.extend(task);

})
