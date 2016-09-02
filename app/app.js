steal(

    'can',
    'fastclick/lib/fastclick.js',

    'app/components/header/header.js',
    'app/components/content_window/content_window.js',
    'app/components/dashboard/dashboard.js',
    'app/components/list_manager/list_manager.js',
    'app/components/task_list/task_list.js',
    'app/components/task/task.js',

    './views/title_view.stache!',
    './views/single_list_view.stache!',
    './views/multi_list_view.stache!',

    './app.less!',

    function(
        can,
        Fastclick,
        Header, ContentWindow, Dashboard, ListManager, TaskList, Task,
        TitleView, SingleListView, MultiListView,
        appStyle
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
                $('#app').empty();
                $('#app').append(compiledView);
            }
        });

        var vm = new ViewModel();
        var compiledView = TitleView(vm);
        $('#app').html(compiledView);
});
