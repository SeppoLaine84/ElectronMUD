const c = require('ansi-colors');


function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    return c.cyan("[" + hour + ":" + min + ":" + sec+"]");

}

var log = {
    debug: function (text) {
        console.log("DEBUG: " + text);
    },
    info: function (text) {
        console.log(c.green(getDateTime()+" INFO: ") + text);
    },
    warn: function (text) {
        console.log(c.yellow(getDateTime()+" WARN: ") + text);
    },
    err: function (text) {
        console.log(c.red(getDateTime()+" ERROR: ") + text);
    },
    client: function (text) {
        console.log(c.magenta(getDateTime() + " CLIENT: ") + text);
    },
    success: function (text) {
        console.log(c.greenBright.bold(getDateTime() + " CLIENT: ") + text);
    }
                        
};

module.exports = log;