steal(

    'can',

    '../list_manager/list_manager.js',

    './content_window.stache!',
    './content_window.less!',

    function(
        can, 
        ListManager,
        contentView
    ) {

        can.Component.extend({
            tag: 'app-content-window',
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
