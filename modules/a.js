module.exports = (function () {

    var name = function () {
        return 'browser module';
    };

    var print = function () {
        console.log('print from browser.');
    };

    return {
        name:name,
        print:print
    }
})();