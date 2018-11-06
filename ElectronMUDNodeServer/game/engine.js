class engine {

    constructor() {
        this.world = undefined;
        this.server = undefined;
    }

    // Starts game engine
    Start() {

    }

    BuildWorld (seed) {
        world = World(seed);
    }

    SetServer  (server) {

    }

    GetServer() { return server; };
    GetWorld () { return world; };
}


module.exports = engine;