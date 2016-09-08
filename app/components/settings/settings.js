steal(

    'can',
    './settings.stache!',
    './settings.less!',

    function(
        can, 
        settingsView
    ) {

        can.Component.extend({
            tag: 'app-settings',
            template: settingsView,
            viewModel: {
                exportFormat: 'markdown', 
                cloudProvider: 'Google Drive', 
                toggleSettings: function() {
                    this.attr('settingsActive', !this.attr('settingsActive'));
                }
            },
            events: {}
        });

});
