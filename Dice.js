class Dice {

    constructor(x, y, type) {

        this.x = x;
        this.y = y;
        this.size = width/4.5;
        this.side = int(random(6));
        this.rotation = random([0, 90, 180, 270]);
        this.type = type;

        this.clicked = true;
        this.backgroundColour = "#ccc";
    }

    display() {

        push();
        rectMode(CENTER);
        translate(width/2, height/2);
        translate(-(gridSize-1)/2*this.size, -(gridSize-1)/2*this.size);

        translate(this.x*this.size, this.y*this.size);

        noStroke();
        fill(this.backgroundColour);
        rect(0, 0, this.size*.95, this.size*.95, this.size*.1);

        push();
        rotate(this.rotation);

        this.displaySide();

        // if (this.type == "🚩" || this.type == "🗝️" || this.type == "🧰") {
        //     textFont("monospace")
        // }

        // textSize(this.size*.2);
        // text(this.type, 0, 0);

        let img = keyImage;

        if (this.type == "🚩") img = flagImage;
        else if (this.type == "💀") img = skullImage;
        else if (this.type == "🍖") img = foodImage;
        else if (this.type == "🔑") img = keyImage;
        else if (this.type == "🔃") img = rerollImage;
        else if (this.type == "🗝️") img = specialKeyImage;
        else if (this.type == "🧰") img = chestImage;

        image(img, 0, 0, this.size*.4, this.size*.4)

        pop();

        pop();
    }

    displaySide() {

        push();

        // fill("#555");
        // rect(this.size*.95/4, 0, this.size*.95/2, this.size*.2);
        // rect(-this.size*.95/4, 0, this.size*.95/2, this.size*.2);
        // rect(0, -this.size*.95/4, this.size*.2, this.size*.95/2);
        // rect(0, this.size*.95/4, this.size*.2, this.size*.95/2);

        push();

        fill("#000");

        for (let i = 0; i < 4; i++) {
            // text("🔒", 0, this.size*.95*.41);

            image(lockImage, 0, this.size*.95*.41, this.size*.1, this.size*.1)
            rotate(90);
        }

        pop();

        fill("#fff");
        stroke("#000");

        if (this.side == 0) {
            rect(this.size*.95/4, 0, this.size*.95/1.95, this.size*.2);
            rect(0, 0, this.size*.6, this.size*.6, 4);
        } else if (this.side == 1) {
            rect(this.size*.95/4, 0, this.size*.95/1.95, this.size*.2);
            rect(-this.size*.95/4, 0, this.size*.95/1.95, this.size*.2);
            rect(0, 0, this.size*.6, this.size*.6, 4);
        } else if (this.side == 2) {
            rect(this.size*.95/4, 0, this.size*.95/1.95, this.size*.2);
            rect(-this.size*.95/4, 0, this.size*.95/1.95, this.size*.2);
            rect(0, -this.size*.95/4, this.size*.2, this.size*.95/1.95);
            rect(0, 0, this.size*.6, this.size*.6, 4);
        } else if (this.side == 3) {
            rect(this.size*.95/4, 0, this.size*.95/1.95, this.size*.2);
            rect(0, -this.size*.95/4, this.size*.2, this.size*.95/1.95);
            rect(0, 0, this.size*.6, this.size*.6, 4);
        } else if (this.side == 4) {
            rect(this.size*.95/4, 0, this.size*.95/1.95, this.size*.2);
            rect(-this.size*.95/4, 0, this.size*.95/1.95, this.size*.2);
            rect(0, -this.size*.95/4, this.size*.2, this.size*.95/1.95);
            rect(0, this.size*.95/4, this.size*.2, this.size*.95/1.95);
            rect(0, 0, this.size*.6, this.size*.6, 4);
        } else if (this.side == 5) {
            rect(0, 0, this.size*.6, this.size*.6, 4);
        }

        pop();
    }

    click(x, y) {

        let a = width/2 -(gridSize-1)/2*this.size + this.x*this.size;
        let b = height/2 -(gridSize-1)/2*this.size + this.y*this.size;

        if (dist(x, y, a, b) < this.size/2) this.backgroundColour = "#aaa";
    }

    reroll(x, y) {

        let a = width/2 -(gridSize-1)/2*this.size + this.x*this.size;
        let b = height/2 -(gridSize-1)/2*this.size + this.y*this.size;

        if (dist(x, y, a, b) < this.size/2) {

            this.side = int(random(6));
            this.rotation = random([0, 90, 180, 270]);
        }
    }
}