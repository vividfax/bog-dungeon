let diceArr;
let gridSize = 4;

let types = [];

let canvasSize = 540;

let heartCount = 1;
let keyCount = 2;
let specialKeyCount = 0;

let heartSpan;
let keySpan;
let specialKeySpan;

function setup() {

    if (windowWidth < 540) canvasSize = windowWidth

    createCanvas(canvasSize, canvasSize);

    angleMode(DEGREES);
    textFont("Noto Emoji");
    textAlign(CENTER, CENTER)

    diceArr = [...Array(gridSize)].map(e => Array(gridSize));
    heartCount
    types = types.concat(["🔑", "🔑", "🔑", "🔑"]);
    types = types.concat(["💀", "💀", "💀", "💀", "💀"]);
    types = types.concat(["🍖", "🍖", "🍖"]);
    types = types.concat(["🔃"]);
    types = types.concat(["🗝️"]);
    types = types.concat(["🧰"]);
    types = types.concat(["🚩"]);
    types = shuffle(types);

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {

            diceArr[i][j] = new Dice(i, j, types.pop());
        }
    }

    noLoop();

    setupButtons();
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

    if (mouseButton == LEFT)  {
        fill(255, 255, 255, 200);
        ellipse(mouseX, mouseY, 30);

    } else if (mouseButton == CENTER) {

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {

                diceArr[i][j].reroll(mouseX, mouseY);
            }
        }
    }
}

function setupButtons() {

    heartSpan = select("#numberOfHearts");
    keySpan = select("#numberOfKeys");
    specialKeySpan = select("#numberOfSpecialKeys");

    select("#minusHeart").mouseReleased(subtractHeart);
    select("#plusHeart").mouseReleased(addHeart);
    select("#minusKey").mouseReleased(subtractKey);
    select("#plusKey").mouseReleased(addKey);
    select("#minusSpecialKey").mouseReleased(subtractSpecialKey);
    select("#plusSpecialKey").mouseReleased(addSpecialKey);
}

function subtractHeart() {

    heartCount--;
    heartSpan.html(heartCount);
}

function addHeart() {

    heartCount++;
    heartSpan.html(heartCount);
}

function subtractKey() {

    keyCount--;
    keySpan.html(keyCount);
}

function addKey() {

    keyCount++;
    keySpan.html(keyCount);
}

function subtractSpecialKey() {

    specialKeyCount--;
    specialKeySpan.html(specialKeyCount);
}

function addSpecialKey() {

    specialKeyCount++;
    specialKeySpan.html(specialKeyCount);
}