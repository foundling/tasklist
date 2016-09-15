steal(

    'can',
    'jquery',
    'jquery-ui',
    'node_modules/jquery-ui-dist/jquery-ui.css!',

    'app/models/colorschemes.js',

    'app/plugins/converters/converters.js',
    'clipboard/dist/clipboard.min.js',

    './settings.stache!',
    './settings.less!',

    function(
        can, $, jqueryUI, jqueryUIStyles,
        colorschemes,
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
                colorscheme: colorschemes[0],
                colorschemes: colorschemes,
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

                    $('#colortheme-slider').slider({
                        value:  0, 
                        min:    0,
                        max:    this.viewModel.attr('colorschemes').length - 1,
                        step:   1,
                        animate: 'fast'
                    });
                },

                '#colortheme-slider slide': function(el, ev, data) {
                    var newColorscheme = this.viewModel.attr('colorschemes.' + data.value);
                    this.viewModel.attr('colorscheme', newColorscheme);
                    console.log('colorscheme changed to: ', this.viewModel.attr('colorscheme.name'));
                },
                '{viewModel colorscheme} change': function() {
                }
            } 
        });

});
