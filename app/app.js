steal(

    'can',

    'app/views/title_view.stache!',
    'app/views/single_list_view.stache!',
    'app/views/multi_list_view.stache!',

    'app/assets/styles/font-awesome-4.6.3/css/font-awesome.min.css!',
    'app/assets/styles/app.less!',
    'app/assets/styles/z-index.less!',
    'app/assets/styles/icons.less!',
    'app/assets/styles/fonts.less!',

    'app/assets/styles/colors-default.less!',
    'app/models/colorschemes.js',

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
        TitleView, SingleListView, MultiListView, 
        fontAwesomeStyles, appStyles, zIndexeStyles, iconStyles, fontStyles,
        defaultColors, colorschemes,
        Container, Header, ContentWindow, Dashboard, Settings, ListManager, TaskList, Task,
        Store, converters 
    ) {

        can.store = Store;
        if (!can.store.get('tasklist')) {
            can.store.set('tasklist', {
                'taskLists': [],
                'settings': {
                    colorscheme: 'default'
                }
            });
        }
        console.log(can.store.get('tasklist'));

        var ViewModel = can.Map({
            settingsActive: false,
            view: '',
            colorscheme: can.store.get('tasklist')['settings']['colorscheme'],
            views: {
                title:      TitleView,
                singlelist: SingleListView, 
                multilist:  MultiListView,
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
        setTimeout(function() {
            $('div.title-view-wrapper').addClass('fade-in-bg'); 
            setTimeout(function() {
                $('h1.app-content-window-title').addClass('fade-in-text-shadow'); 
                $('h1.app-content-window-title').addClass('fade-in-color'); 
            });
        }, 0);


});
