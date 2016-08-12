steal(
        
    'can', 
    function(can) {

        var task = {

            name:       'task',
            backupName: '',
            notes:      'Task Notes',
            notesOpen:  false,
            complete:   false,

            toggleNotes: function() { 
                this.attr('notesOpen', !this.attr('notesOpen'));
            },
            toggleComplete: function() {
                this.attr('complete', !this.attr('complete'));
            }
        };

        return can.Map.extend(task);

})
