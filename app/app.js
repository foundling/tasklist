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
        Header, ContentWindow, Utils,
        Task, TaskList,
        titleView, singleListView, multipleListView,
        appStyle
    ) {
        $('#app').append(multipleListView);
});
