steal(

    'can',
    function(can) {

        return can.Component.extend({ 

            tag: 'task-menu',
            template: can.view('/app/components/menu/menu.stache'),
            viewModel: null,
            events: {
                'inserted': function(el, ev) {
                    console.log('menu inserted');
                },
            }

        }); 
});
