class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(point) {
        var xDist = this.x - point.x;
        var yDist = this.y - point.y;
        return new point(xDist, yDist);
    }
}

module.exports = point;