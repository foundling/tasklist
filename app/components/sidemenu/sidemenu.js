steal(

    'can',
    function(can) {

        return can.Component.extend({ 

            tag: 'task-sidemenu',
            template: can.view('/app/components/sidemenu/sidemenu.stache'),
            viewModel: null,
            events: {
                'inserted': function(el, ev) {
                    console.log('sidemenu inserted');
                },
            }

        }); 
});
