steal(

    'can',
    'jquery',
    'jquery-ui',
    'node_modules/jquery-ui-dist/jquery-ui.css!',
    'app/plugins/storage/storage.js',


    'app/models/themes.js',

    'app/plugins/converters/converters.js',
    'clipboard/dist/clipboard.min.js',

    './settings.stache!',
    './settings.less!',

    function(
        can, $, jqueryUI, jqueryUIStyles,
        storage,
        themes,
        converter,
        Clipboard,
        SettingsView
    ) {

        can.Component.extend({

            tag: 'app-settings',
            template: SettingsView,
            viewModel: {

                exportModalActive: false, 
                exportFormat: 'markdown', 
                exportContent: '',
                cloudProvider: 'Google Drive', 
                theme: themes[0],
                themes: themes,
                toggleSettings: function() {
                    this.attr('settingsActive', !this.attr('settingsActive'));
                },
                exportTaskLists: function() {
                    var exportFormat = this.attr('exportFormat');
                    var exportContent = storage.get('taskLists');
                    var convertedContent = converter.convert(exportContent, exportFormat);
                    this.attr('exportContent', convertedContent);
                    this.attr('exportModalActive', !this.attr('exportModalActive'));
                },
                initClipboard: function() {
                    var clipboard = new Clipboard('.copy');
                }
            },
            events: {

                'inserted': function() {
                    console.log(this.viewModel);

                    $('#theme-slider').slider({
                        value:  0, 
                        min:    0,
                        max:    this.viewModel.attr('themes').length - 1,
                        step:   1,
                        animate: 'fast'
                    });
                },

                '#theme-slider slide': function(el, ev, data) {
                    var index = data.value;
                    var newTheme = this.viewModel.attr('themes.' + index);
                    this.viewModel.attr('theme', newTheme);
                    storage.set('settings.theme', newTheme);

                    // it's possible that the viewModel's theme prop is disconnected
                    // from the top level component, so fix that.  

                },
                '{viewModel theme} change': function() {
                }
            } 
        });

});
