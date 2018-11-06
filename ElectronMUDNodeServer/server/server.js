const net = require('net');
const c = require('ansi-colors');
const log = require('./log');


class Client {
    constructor(socket) {
        this.socket = socket;
    }
}

function Server(port, autostart = true) {

    var Port = port;                                                                                                                                         
    var server = undefined;
    var Clients = [];

    // Create a new server and provide a callback for when a connection occurs.
    this.InitializeServer = function () {
        server = net.createServer(ClientConnected);
        server.listen(Port);
        log.info("Server listening at port " + Port);
    };

    // Add client to server
    AddClient = function (socket) {

        var client = new Client(socket);
        Clients.push(client);

        socket.on('data', function (data) {
            data = data.toString().replace(/(\r\n)+|\r+|\n+|\t+/i, "").trim();
            Receive(data);
        });

        log.info("Client connected.");
    };

    // Client disconnects
    RemoveClient = function(socket) {
        var i = Clients.indexOf(socket);
        if (i != -1) {
            Clients.splice(i, 1);
        }
    };
                                    
    // Client connects to server.
    ClientConnected = function (socket) {
        AddClient(socket);
        Send(socket, "Welcome to the Telnet server!\n\r********************************************")
        Send(socket, '1 - enter the game');
        Send(socket, 'q - quit');
     
    };

    // Send data to specific client
    Send = function (socket, data) {
        socket.write(data + "\n\r");
    };

    // Send data to all clients
    SendToAll = function (client, data) {
        if (data.length > 0) {
            log.info(data.length);
            client.socket.write(data);
        }
    };

    Receive = function (data) {
        if (data.toString() !== "???? ????'??????")
            log.client(data.toString());      
        // handleCommands(data);
    };

    if(autostart)
        this.InitializeServer();
}
 
module.exports = Server;