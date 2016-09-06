steal(

    'can',

    './views/title_view.stache!',
    './views/single_list_view.stache!',
    './views/multi_list_view.stache!',

    './app.less!',
    'app/assets/styles/font-awesome-4.6.3/css/font-awesome.min.css!',

    'app/components/header/header.js',
    'app/components/content_window/content_window.js',
    'app/components/dashboard/dashboard.js',
    'app/components/list_manager/list_manager.js',
    'app/components/task_list/task_list.js',
    'app/components/task/task.js',

    'app/plugins/local_storage.js',
    'fastclick/lib/fastclick.js',

    function(
        can,
        TitleView, SingleListView, MultiListView,
        appStyle, fontAwesome,
        Header, ContentWindow, Dashboard, ListManager, TaskList, Task,
        localStorage,
        Fastclick
    ) {

        Fastclick.attach(document.body);

        var ViewModel = can.Map({
            view: null,
            views: {
                title:          TitleView,
                singlelist:     SingleListView, 
                multilist:      MultiListView
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
