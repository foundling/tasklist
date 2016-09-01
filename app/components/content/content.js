steal(

    'can',
    './content.stache!',
    './content.less!',

    function(
        can, 
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
