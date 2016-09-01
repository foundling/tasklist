steal(

    'can',

    './components/header/header.js',
    './components/content/content.js',
    './components/utils/utils.js',

    './title_view.stache!',
    './app.less!',


    function(
        can,
        Header, Content, Utils,
        titleView, appStyle
    ) {
        $('#app').append(titleView);
});
