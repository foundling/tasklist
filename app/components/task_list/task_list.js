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
                listManager: null,
                toggleOpen: function() {
                    this.attr('open', this.attr('open') === 'true' ? 'false' : 'true');
                }
            },
            events: {
                'inserted': function() {
                    console.log(this.viewModel.attr('listManager'));
                }
            }
        });
})
