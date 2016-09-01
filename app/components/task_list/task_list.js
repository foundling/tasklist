steal(

    'can',
    './task_list.stache!',

    function(
        can, 
        ListView
    ){
        can.Component.extend({
            tag: 'app-task-list',
            template: ListView,
            viewModel: {
                toggleOpen: function() {
                    console.log('toggleOpen');
                    this.open = (this.open === 'true' ? 'false' : 'true');
                }
            },
            events: {}
        });
});
