steal(

    'can',
    './task_list.stache!',
    './task_list.less!',

    function(
        can, 
        ListView
    ){
        can.Component.extend({
            tag: 'app-task-list',
            template: ListView,
            viewModel: {
                active: false,
                toggleOpen: function() {
                    this.attr('open', this.attr('open') === 'true' ? 'false' : 'true');
                    console.log(this.open);
                    console.log(this);
                }
            },
            events: {}
        });
});
