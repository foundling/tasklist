steal('can',function(can){
    var list = {
        title: '',
        tasks: [], 
    };

    return can.Map.extend(list);
})
