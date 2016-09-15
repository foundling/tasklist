steal(

    'can',

    './title_page.stache!',
    './title_page.less!',

    function(
        can, 
        TitlePageView,
        TitlePageStyle
    ) {

        can.Component.extend({
            tag: 'app-title-page',
            template: TitlePageView,
            viewModel: {
                title: 'Task List'
            },
            events: {
                'inserted': function(el, ev) {

                    setTimeout(function() {
                        $('div.title-view-wrapper').addClass('fade-in-bg'); 
                        setTimeout(function() {
                            $('h1.app-content-window-title').addClass('fade-in-text-shadow'); 
                            $('h1.app-content-window-title').addClass('fade-in-color'); 
                        });
                    }, 0);

                },
                'div.title-view-wrapper click': function(el, ev) {
                    $('div.title-view-wrapper').removeClass('fade-in-bg');
                },
            }
        });
});
