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
                parent: null,
                toggleOpen: function() {
                    this.attr('open', this.attr('open') === 'true' ? 'false' : 'true');
                },
                isMostRecent: function() {
                    console.log(this.attr('parent'));
                },
                isActive: function(taskList) {
                    console.log(this.attr('parent'));
                    var index = this.attr('parent').indexOf(taskList);
                }
            },
            events: {}
        });
});
