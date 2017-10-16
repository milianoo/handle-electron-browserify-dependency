module.exports = (function () {

    var fs = require('fs');
    var electron = require('electron');

    var name = function () {
        return 'electron module';
    };

    var print = function () {
        if (fs)
        fs.readFile('test.txt', "utf8", function (err, data) {
            console.log(data);
        });
    };

    return {
        name:name,
        print:print
    }
})();