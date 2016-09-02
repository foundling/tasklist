steal(

    'can',

    './components/header/header.js',
    './components/content_window/content_window.js',
    './components/dashboard/dashboard.js',
    './components/task/task.js',
    './components/task_list/task_list.js',

    './views/title_view.stache!',
    './views/single_list_view.stache!',
    './views/multiple_list_view.stache!',

    './app.less!',

    function(
        can,
        HeaderComponent, ContentWindowComponent, DashboardComponent, TaskComponent, TaskListComponent,
        TitleView, SingleListView, MultipleListView,
        appStyle
    ) {

        var ViewModel = can.Map.extend({
            view: null,
            views: {
                title:          TitleView,
                multipleLists:  MultipleListView, 
                singleList:     SingleListView 
            },
            switchView: function (viewName) {
                this.attr('colorscheme', (viewName === 'title') ? viewName : '');
                var nextView = this.views[viewName](vm);
                $('#app').html(nextView);
            }
        });

        var vm = new ViewModel({ view: 'title' });
        var compiledTemplate = TitleView(vm);
        $('#app').html(compiledTemplate);
});
