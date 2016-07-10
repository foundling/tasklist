steal(
        
    'can', 
    function(can) {

        var task = {
            name:       'task',
            backupName: '',
            notes:      '',
            complete:   false,
            notesOpen:  false,
            toggleNotes: function() { 
                this.attr('notesOpen', !this.attr('notesOpen'));
            },
            toggleComplete: function() {
                this.attr('complete', !this.attr('complete'));
            }
        };

        return can.Map.extend(task);

})
