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
                data: null,
                theme: storage.get('settings.theme'),
                views: {
                    title:      TitleView,
                    singlelist: SingleListView, 
                    multilist:  MultiListView,
                    settings:   SettingsView,
                },
                switchView: function (viewName, data) {
                    viewName = (typeof viewName === 'function') ?  viewName() : viewName;
                    nextView = this.attr('views')[viewName];
                    vm.attr('view', viewName);
                    vm.attr('data', data);
                    nextViewCompiled = nextView(vm);
                    $('app-container > div').html(nextViewCompiled);
                    console.log(viewName);
                    console.log(this.attr('view'));
                }
            });


            var vm = new ViewModel({view: 'title'});
            vm.bind('theme', function(ev, attr, how, newVal, oldVal) {
                console.log('theme changed');
            });
            var compiledView = TitleView(vm);
            $('#app').html(compiledView);

        };

});
