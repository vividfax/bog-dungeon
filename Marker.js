class Marker {

    constructor(x, y) {

        this.x = x;
        this.y = y;
    }

    display() {

        fill(255, 255, 255, 200);
        ellipse(this.x, this.y, 30);
    }

    clicked(x, y) {

        if (dist(x, y, this.x, this.y) < 30/2) return true;
    }
}