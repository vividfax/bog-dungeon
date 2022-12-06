let diceArr;
let gridSize = 4;

let types = [];
function setup() {

    createCanvas(540, 540);

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

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {

            diceArr[i][j].click(mouseX, mouseY);
        }
    }
}