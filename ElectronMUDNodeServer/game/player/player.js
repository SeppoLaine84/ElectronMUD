const enums = require('./../enums');
const point = require('./../helpers/point');

class player {
    constructor(playerData) {
        super(playerData);
        this.type = enums.CharacterType.PLAYER;

        this.position = new point(0, 0);
        this.lastPosition = this.position;
    }

    SetPosition(x, y) {
        this.lastPosition = this.position;
        this.position.set(x, y);
    }
}