steal(

    'can',

    './components/header/header.js',
    './components/content/content.js',
    './components/utils/utils.js',


    './title_view.stache!',
    './single_list_view.stache!',
    './multiple_list_view.stache!',

    './app.less!',

    function(
        can,
        Header, Content, Utils,
        titleView, singleListView, multipleListView,
        appStyle
    ) {
        $('#app').append(multipleListView);
});
