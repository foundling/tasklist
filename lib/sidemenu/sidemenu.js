steal(

    'can',
    function(can) {

        return can.Component.extend({ 

            tag: '<task-sidemenu></task-sidemenu>', 
            template: can.view('/lib/sidemenu/sidemenu.stache'),
            viewModel: {},
            events: {
                'inserted': function(el, ev) {
                    console.log('sidemenu inserted');
                },
            }

        }); 
});
