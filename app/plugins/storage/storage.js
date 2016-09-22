/*  A wrapper around store.js that provides string path look ups in the canjs style. */
steal(

    'store/store.js', 
    'app/models/task_list.js', 
    'app/models/themes.js',

    function(
        store, 
        TaskList,
        themes

    ) {

    var Storage = function() {

        return {

            init: function() {

                if (!store.get('tasklist')) {
                    store.set('tasklist', {
                        'taskLists': [ 
                            new TaskList({title:'A'}).serialize(), 
                            new TaskList({title:'B'}).serialize(),
                            new TaskList({title:'C'}).serialize(),
                            new TaskList({title:'D'}).serialize() 
                        ],
                        'settings': {
                            theme: themes[0],
                        }
                    });
                }
            },

            clear: function() {
                store.set('tasklist','');
                this.init();
            },

            get: function(path) {

                if (!path) {

                    return store.get('tasklist');

                } else {

                    var parts = path.split('.');
                    var target = store.get('tasklist');
                    while (parts.length) {
                        target = target[ parts.shift() ];
                    }
                    return target;

                }
            },

            set: function(path, data) {

                var parts = path.split('.');
                var appData = store.get('tasklist');
                var target = appData;
                data = (data.serialize) ? data.serialize() : data;

                while (parts.length > 1) {
                    target = target[ parts.shift() ];
                }
                target[parts[0]] = data;
                store.set('tasklist', appData);
            }
        };
    };

    return new Storage();
});
