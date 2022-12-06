let diceArr;
let gridSize = 4;

let types = [];

let canvasSize = 540;

function setup() {

    if (windowWidth < 540) canvasSize = windowWidth

    createCanvas(canvasSize, canvasSize);

    angleMode(DEGREES);
    textFont("Noto Emoji");
    textAlign(CENTER, CENTER)

    diceArr = [...Array(gridSize)].map(e => Array(gridSize));

    types = types.concat(["🔑", "🔑", "🔑", "🔑"]);
    types = types.concat(["💀", "💀", "💀", "💀", "💀", "💀"]);
    types = types.concat(["🍖", "🍖", "🍖", "🍖"]);
    types = types.concat(["🧰"]);
    types = types.concat(["🚩"]);
    types = shuffle(types);

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {

            diceArr[i][j] = new Dice(i, j, types.pop());
        }
    }

    noLoop();
}

function draw() {

    background("#0a0a0a");

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {

            diceArr[i][j].display();
        }
    }
}

function mousePressed() {

    // for (let i = 0; i < gridSize; i++) {
    //     for (let j = 0; j < gridSize; j++) {

    //         diceArr[i][j].click(mouseX, mouseY);
    //     }
    // }

    fill(255, 255, 255, 200);
    ellipse(mouseX, mouseY, 30);
}