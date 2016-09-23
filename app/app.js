steal(

    'can',
    'app/plugins/storage/storage.js',

    'app/views/title_view.stache!',
    'app/views/single_list_view.stache!',
    'app/views/multi_list_view.stache!',
    'app/views/settings_view.stache!',

    'app/components/all.js',
    'app/assets/styles/all.js',

    'store/store.js',
    'app/plugins/converters/converters.js',

    function(
        can, storage,
        TitleView, SingleListView, MultiListView, SettingsView, 
        AppComponents,
        AppStyles,
        store, converters 
    ) {
        return function(storage) {

            // to be removed: debugging in console only
            can.storage = storage;

            var ViewModel = can.Map({
                settingsActive: false,
                view: null, 
                theme: storage.get('settings.theme'),
                singleListView: false,
                views: {
                    title:      TitleView,
                    singlelist: SingleListView, 
                    multilist:  MultiListView,
                    settings:   SettingsView,
                },
                toggleSingleListView: function() {
                    this.attr('singleView', !this.attr('singleView'));
                },
                switchView: function (viewName, data) {
                    this.attr('data', data);
                    nextView = this.attr('views')[viewName];
                    vm.attr('view', viewName);
                    nextViewCompiled = nextView(vm);
                    $('app-container > div').html(nextViewCompiled);
                },
                setTask: function() {
                    console.log('set task');
                }
            });



            var vm = new ViewModel({view: 'title'});
            var compiledView = TitleView(vm);
            $('#app').html(compiledView);

        };

});
