steal(

    'can',
    './app.stache!',

    function(
        can, 
        AppComponentView,
    ) {

        can.Component.extend({
            tag: 'app-app',
            template: AppComponentView,
        });
});
