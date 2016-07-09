steal(
    'chai',
    'steal-mocha',
    './tasklist.js',
    function(mocha, chai, Tasklist) {
        describe('tasklist test', function() {
            it('should do something', function() {
                var tasklist = new Tasklist();
                expect(tasklist.length).to.eql(0);
            });
        });

    
});
