steal(

    './jsonToMd.js',
    'x2js',

    function(
        jsonToMd,
        X2JS
    ) {

        var Converters = function() {

            var converters = {

                xml: function(data) {
                    var x2js = new X2JS();
                    x2js.json2xml_str(data);
                },

                json: function(data) {
                    return JSON.stringify(data, undefined, 4);
                },

                txt: function(data) {},

                markdown: function(data) {
                    return jsonToMd(data);
                },

            };


            return {
                convert: function(data, format) {
                    return converters[format](data);
                }
            };
        };

        return new Converters();

    });
