steal(

    'can',

    'app/plugins/jsonToMd.js',

    './settings.stache!',
    './settings.less!',

    function(
        can, 
        jsonToMd,
        settingsView
    ) {

        can.Component.extend({

            tag: 'app-settings',
            template: settingsView,
            viewModel: {

                exportModalActive: false, 
                exportFormat: 'markdown', 
                exportContent: '',
                cloudProvider: 'Google Drive', 
                toggleSettings: function() {
                    this.attr('settingsActive', !this.attr('settingsActive'));
                },
                exportTaskLists: function() {
                    var exportContentRaw = can.store.get('taskLists');
                    jsonToMd(exportContentRaw);
                    this.attr('exportContent', exportContentRaw);
                    this.attr('exportModalActive', !this.attr('exportModalActive'));
                }
            },
            events: {
            } 
        });

});
