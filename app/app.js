steal(

    'can',
    'app/router/router.js',
    'app/plugins/storage/storage.js',
    'app/plugins/converters/converters.js',

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


    function(
        can, router, storage, converters, 
        TitleView, SingleListView, MultiListView, SettingsView, 
        fontAwesomeStyles, appStyles, zIndexStyles, iconStyles, fontStyles, dragAndDropStyles, themeStyles,
        TitlePage, Container, Header, ContentWindow, Dashboard, Settings, ListManager, TaskList, Task
    ) {
        return function(storage) {

            can.route(':page', {page: 'landing'});
            can.route.attr('page', 'title');
            can.route.ready();

            var ViewModel = can.Map({
                settingsActive: false,
                view: 'title',
                theme: storage.get('settings.theme'),
                // really bad idea to couple the view change and the url change here. 
                // fwd and back don't always happen when a click happens  
                views: {
                    'title':        TitleView,
                    'singlelist':   SingleListView,
                    'multilist':    MultiListView,
                    'settings':     SettingsView
                },

                switchView: function (nextViewName) {

                    nextViewName = (typeof nextViewName === 'function') ?  nextViewName() : nextViewName;
                    nextView = this.attr('views')[nextViewName];
                    vm.attr('view', nextViewName);
                    nextViewCompiled = nextView(vm);
                    // keep app-container component around to preserve top-level app data state
                    $('app-container > div').html(nextViewCompiled);
                    can.route.attr('page', this.attr('urls.' + nextViewName));  
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
