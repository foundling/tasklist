steal(
        
    'can', 
    function(can) {

        var task = {

            name:       'task',
            backupName: '',

            notes:      'Task Notes',
            notesOpen:  false,
            toggleNotes: function() { 
                this.attr('notesOpen', !this.attr('notesOpen'));
            },

            complete:   false,
            toggleComplete: function() {
                this.attr('complete', !this.attr('complete'));
            }
        };

        return can.Map.extend(task);

})
