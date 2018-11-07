'use strict';

const config = require('./config');
const server = require('./server/server');
const log = require('./server/log');
const mongoose = require('mongoose')


function ConnectToDatabase(connected_cb) {

    mongoose.connection.on('connecting', function () {
        log.info("Connecting to database.");
    });

    mongoose.connection.on('connected', function () {
        log.info('Connected to Database.');
        if (connected_cb) connected_cb();
    });
          
    mongoose.connection.on('error', function (err) {
        log.err('Connection to mongo failed ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        log.warn('DB connection closed.');
    });

    mongoose.connect('mongodb://localhost:27017/electronmud', { useNewUrlParser: true });

}

function StartServer() {
    log.info("Starting " + config.name + " server.");
    var Server = new server(config.port);
}
ConnectToDatabase(StartServer);


