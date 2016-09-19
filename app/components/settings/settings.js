steal(

    'can',
    'jquery',
    'jquery-ui',
    'node_modules/jquery-ui-dist/jquery-ui.css!',
    'store/store.js',


    'app/models/themes.js',

    'app/plugins/converters/converters.js',
    'clipboard/dist/clipboard.min.js',

    './settings.stache!',
    './settings.less!',

    function(
        can, $, jqueryUI, jqueryUIStyles,
        store,
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
                    var index = data.value;
                    var newTheme = this.viewModel.attr('themes.' + index);
                    this.viewModel.attr('theme', newTheme);

                    // refactor this out of the app into a wrapper around store
                    // and sync the change in settings (and elsewhere) with localstorage
                    var appData = store.get('tasklist');
                    appData.settings.theme = newTheme;
                    store.set('tasklist', appData);
                    console.log(store.get('tasklist'));
                    // not exported up chain?


                },
                '{viewModel theme} change': function() {
                }
            } 
        });

});
