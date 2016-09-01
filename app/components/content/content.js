steal(

    'can',
    './../components/lists/lists.js',
    './content.stache!',
    './content.less!',

    function(
        can, 
        lists,
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
