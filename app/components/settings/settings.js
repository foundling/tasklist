steal(

    'can',
    'jquery',
    'jquery-ui',
    'node_modules/jquery-ui-dist/jquery-ui.css!',

    'app/models/themes.js',

    'app/plugins/converters/converters.js',
    'clipboard/dist/clipboard.min.js',

    './settings.stache!',
    './settings.less!',

    function(
        can, $, jqueryUI, jqueryUIStyles,
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
                    var exportContent = can.store.get('tasklist')['taskLists'];
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
                    var newTheme = this.viewModel.attr('themes.' + data.value);
                    this.viewModel.attr('theme', newTheme);
                    console.log('theme changed to: ', this.viewModel.attr('theme.name'));
                },
                '{viewModel theme} change': function() {
                }
            } 
        });

});
