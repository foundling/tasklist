steal(

    'can',

    './components/header/header.js',
    './components/content/content.js',
    './components/utils/utils.js',
    './components/list_manager/list_manager.js',

    './app.less!',

    './title_view.stache!',
    './single_list_view.stache!',
    './multiple_list_view.stache!',

    function(
        can,
        appStyle,
        Header, Content, Utils, ListManager,
        titleView, singleListView, multipleListView
    ) {
        $('#app').append(multipleListView);
});
