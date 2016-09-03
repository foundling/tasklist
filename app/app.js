steal(

    'can',

    './views/title_view.stache!',
    './views/single_list_view.stache!',
    './views/multi_list_view.stache!',
    './app.less!',

    'fastclick/lib/fastclick.js',

    'app/components/header/header.js',
    'app/components/content_window/content_window.js',
    'app/components/dashboard/dashboard.js',
    'app/components/list_manager/list_manager.js',
    'app/components/task_list/task_list.js',
    'app/components/task/task.js',

    'app/plugins/local_storage.js',

    function(
        can,
        TitleView, SingleListView, MultiListView,
        appStyle,
        Fastclick,
        Header, ContentWindow, Dashboard, ListManager, TaskList, Task,
        localStorage
    ) {

        Fastclick.attach(document.body);

        var ViewModel = can.Map.extend({
            view: 'title',
            views: {
                title:          TitleView,
                singlelist:     SingleListView, 
                multilist:      MultiListView
            },
            switchView: function (viewName) {
                var nextView = this.attr('views')[viewName];
                var compiledView = nextView();
                $('#app').html(compiledView);
            }
        });

        var vm = new ViewModel({});
        var compiledView = TitleView(vm);
        $('#app').html(compiledView);

});
