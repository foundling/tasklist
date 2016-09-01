steal(

    'can',

    './components/header/header.js',
    './components/content_window/content_window.js',
    './components/utils/utils.js',
    './components/task/task.js',
    './components/task_list/task_list.js',

    './title_view.stache!',
    './single_list_view.stache!',
    './multiple_list_view.stache!',

    './app.less!',

    function(
        can,
        HeaderComponent, ContentWindowComponent, UtilsComponent, TaskComponent, TaskListComponent,
        TitleView, SingleListView, MultipleListView,
        appStyle
    ) {

        var ViewModel = can.Map.extend({
            views: {
                title:          TitleView,
                multipleLists:  MultipleListView, 
                singleList:     SingleListView 
            },
            switchView: function (viewName) {
                var nextView = this.views[viewName](vm);
                $('#app').html(nextView);
            }

        });
        var vm = new ViewModel();

        var compiledTemplate = TitleView(vm);

        $('#app').html(compiledTemplate);
});
