/*  A wrapper around store.js that provides string path look ups in the canjs style. */
steal('store/store.js', function(store) {

        return {

            init: function() {

                if (!store.get('tasklist')) {
                    console.log('initializing tasklist localstorage for first time');
                    store.set('tasklist', {
                        'taskLists': [ new TaskList({}).serialize() ],
                        'settings': {
                            theme: 'default'
                        }
                    });
                } else {
                    console.log('using existing tasklist localstorage data');
                } 
            },

            clear: function() {
                store.clear();
            },

            get: function(path) {
                return store.get();
            },

            set: function(path, data) {

                var appData = store.get('tasklist');
                var ptr = appData; 
                var seg;

                path.reverse();
                path = path.split('.');

                while (path) {
                    seg = path.pop();
                    ptr = ptr[seg]; 

                }

            }
        };
});
