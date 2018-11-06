var fs = require('fs');

var fileLoader = {
    loadSync: function (file) {
        return fs.readFileSync(file, 'utf8');
    },
    load: function (file, cb) {
        fs.readFile(file, 'utf8', function (err, contents) {
            cb(contents);
        });
    }
};

module.exports = fileLoader;