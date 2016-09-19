steal(

    'can',
    './app_container.stache!',

    function(
        can, 
        appContainerView
    ) {

        can.Component.extend({
            tag: 'app-container',
            template: appContainerView,
        });

});
