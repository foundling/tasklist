steal(

    'can',

    '../list_manager/list_manager.js',

    './content.stache!',
    './content.less!',

    function(
        can, 
        ListManager,
        contentView
    ) {

        can.Component.extend({
            tag: 'app-content',
            template: contentView,
            viewModel: {
                title: "",
            },
            events: {
                'inserted': function() {
                } 
            }
        });
});
