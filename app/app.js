steal(

    'can',
    'app/plugins/storage/storage.js',

    'app/views/title_view.stache!',
    'app/views/single_list_view.stache!',
    'app/views/multi_list_view.stache!',
    'app/views/settings_view.stache!',

    'app/assets/styles/font-awesome-4.6.3/css/font-awesome.min.css!',
    'app/assets/styles/app.less!',
    'app/assets/styles/z-index.less!',
    'app/assets/styles/icons.less!',
    'app/assets/styles/fonts.less!',
    'app/assets/styles/drag_and_drop.less!',
    'app/assets/styles/themes.less!',

    'app/components/title_page/title_page.js',
    'app/components/app_container/app_container.js',
    'app/components/header/header.js',
    'app/components/content_window/content_window.js',
    'app/components/dashboard/dashboard.js',
    'app/components/settings/settings.js',
    'app/components/list_manager/list_manager.js',
    'app/components/task_list/task_list.js',
    'app/components/task/task.js',

    'store/store.js',
    'app/plugins/converters/converters.js',

    function(
        can, storage,
        TitleView, SingleListView, MultiListView, SettingsView, 
        fontAwesomeStyles, appStyles, zIndexStyles, iconStyles, fontStyles, dragAndDropStyles, themeStyles,
        TitlePage, Container, Header, ContentWindow, Dashboard, Settings, ListManager, TaskList, Task,
        store, converters 
    ) {
        return function(storage) {

            // to be removed: debugging in console only
            can.storage = storage;

            var ViewModel = can.Map({
                settingsActive: false,
                view: 'title',
                theme: storage.get('settings.theme'),
                views: {
                    title:      TitleView,
                    singlelist: SingleListView, 
                    multilist:  MultiListView,
                    settings:   SettingsView,
                },
                switchView: function (viewName) {
                    viewName = (typeof viewName === 'function') ?  viewName() : viewName;
                    nextView = this.attr('views')[viewName];
                    vm.attr('view', viewName);
                    nextViewCompiled = nextView(vm);
                    $('app-container > div').html(nextViewCompiled);
                }
            });


            var vm = new ViewModel({});
            vm.bind('theme', function(ev, attr, how, newVal, oldVal) {
                console.log('theme changed');
            });
            var compiledView = TitleView(vm);
            $('#app').html(compiledView);

        };

});
