'use strict';

const net = require('net');
const config = require('./config');
const server = require('./server/server');
const log = require('./server/log');

log.info("Starting " + config.name + " server.");
var Server = new server(config.port);
