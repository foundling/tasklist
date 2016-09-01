steal(

    'can',

    './components/header/header.js',
    './components/content_window/content_window.js',
    './components/utils/utils.js',
    './components/task/task.js',
    './components/task_list/task_list.js',

    './models/task_list.js',
    './models/task.js',

    './title_view.stache!',
    './single_list_view.stache!',
    './multiple_list_view.stache!',

    './app.less!',

    function(
        can,
        HeaderComponent, ContentWindowComponent, UtilsComponent, TaskComponent, TaskListComponent,
        TaskListModel, TaskModel,
        titleView, singleListView, multipleListView,
        appStyle
    ) {
        var taskList = new TaskListModel({ 
            tasks: [ new TaskModel({ text: 'blank task' }) ] 
        });

        var compiledTemplate = multipleListView({ 
            taskLists: [ taskList ] 
        }); 

        $('#app').append(compiledTemplate);
});
