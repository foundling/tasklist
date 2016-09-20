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

                    var themeIndex;
                    var vmThemeName = this.viewModel.attr('theme.name');
                    themes.forEach(function(theme, index) {
                        if (theme.name === vmThemeName) {
                            themeIndex = index; 
                        } 
                    });

                    $('#theme-slider').slider({
                        value:  themeIndex, // index of the viewModel theme in themes model 
                        min:    0,
                        max:    this.viewModel.attr('themes').length - 1,
                        step:   1,
                        animate: 'fast'
                    });
                },

                '#theme-slider slide': function(el, ev, data) {
                    var newThemeIndex = data.value;
                    var newTheme = this.viewModel.attr('themes.' + newThemeIndex);
                    this.viewModel.attr('theme', newTheme);
                    storage.set('settings.theme', newTheme);
                },
            }
        });

});
