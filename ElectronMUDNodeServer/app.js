'use strict';

const config    = require('./config');
const server    = require('./server/server');
const log       = require('./server/log');
const mongoose  = require('mongoose');


function ConnectToDatabase(connected_cb) {

    mongoose.connection.on('connecting', function () {
        log.info("Connecting to Database");
    });

    mongoose.connection.on('connected', function () {
        log.info('Connected to Database');
        if (connected_cb) connected_cb();
    });
          
    mongoose.connection.on('error', function (err) {
        log.err('Connection to Database failed ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        log.warn('Database connection closed');
    });                            

    mongoose.connect('mongodb://localhost:27017/electronmud', { useNewUrlParser: true });
}

var gracefulExit = function () {
    mongoose.connection.close(function () {
        log.warn('Connection to Database is closing');
        process.exit(0);
    });
};

process.on('SIGINT', gracefulExit);

log.success("Starting " + config.name + " server!");

function StartServer() {             
    log.info("Initializing sockets");
    var Server = new server(config.port);
}
ConnectToDatabase(StartServer);


