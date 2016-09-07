steal(

    'can',

    './views/title_view.stache!',
    './views/single_list_view.stache!',
    './views/multi_list_view.stache!',
    './views/settings_view.stache!',

    'app/assets/styles/app.less!',
    'app/assets/styles/z-index.less!',
    'app/assets/styles/font-awesome-4.6.3/css/font-awesome.min.css!',

    'app/components/header/header.js',
    'app/components/content_window/content_window.js',
    'app/components/dashboard/dashboard.js',
    'app/components/settings/settings.js',
    'app/components/list_manager/list_manager.js',
    'app/components/task_list/task_list.js',
    'app/components/task/task.js',

    'app/plugins/local_storage.js',
    'fastclick/lib/fastclick.js',
    'interact.js/interact.js',

    function(
        can,
        TitleView, SingleListView, MultiListView, SettingsView,
        appStyle, fontAwesome, zIndexes,
        Header, ContentWindow, Dashboard, Settings, ListManager, TaskList, Task,
        localStorage, Fastclick, interact
    ) {

        Fastclick.attach(document.body);

        var ViewModel = can.Map({
            view: null,
            views: {
                title:          TitleView,
                singlelist:     SingleListView, 
                multilist:      MultiListView,
                settings:       SettingsView 
            },
            switchView: function (viewName) {
                var nextView = this.attr('views')[viewName];
                var compiledView = nextView(new ViewModel({view: nextView}));
                $('#app').html(compiledView);
            }
        });

        var vm = new ViewModel({view: 'title'});
        var compiledView = TitleView(vm);
        $('#app').html(compiledView);

});
