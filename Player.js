class Player {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.spacing = width/4.5;
    }

    update() {

        this.move();
    }

    move() {

        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.x--;
        } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.x++;
        } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
            this.y--;
        } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
            this.y++;
        }

        if (this.x < 0) this.x = 0;
        else if (this.x >= gridSize-1) this.x = gridSize-1;
        if (this.y < 0) this.y = 0;
        else if (this.y >= gridSize-1) this.y = gridSize-1;
    }

    display() {

        push();
        translate(width/2, height/2);
        translate(-(gridSize-1)/2*this.spacing, -(gridSize-1)/2*this.spacing);

        fill(255, 0, 0);
        ellipse(this.x*this.spacing, this.y*this.spacing, 20);

        pop();
    }
}