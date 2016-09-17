steal(

    'can',

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

    'app/assets/styles/colorschemes.less!',
    'app/models/colorschemes.js',

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
        can, 
        TitleView, SingleListView, MultiListView, SettingsView, 
        fontAwesomeStyles, appStyles, zIndexeStyles, iconStyles, fontStyles, dragAndDropStyles,
        colorschemeStyles, colorschemes,
        TitlePage, Container, Header, ContentWindow, Dashboard, Settings, ListManager, TaskList, Task,
        store, converters 
    ) {
        return function() {

            var ViewModel = can.Map({
                settingsActive: false,
                view: '',
                colorscheme: store.get('tasklist').settings.colorscheme,
                views: {
                    title:      TitleView,
                    singlelist: SingleListView, 
                    multilist:  MultiListView,
                    settings:   SettingsView,
                },
                switchView: function (viewName) {
                    viewName = (typeof viewName === 'function') ?  viewName() : viewName;
                    nextView = this.attr('views')[viewName];
                    nextViewCompiled = nextView(new ViewModel({view: nextView}));
                    $('#app').html(nextViewCompiled);
                }
            });

            var vm = new ViewModel({view: 'title'});
            var compiledView = TitleView(vm);
            $('#app').html(compiledView);

        };

});
