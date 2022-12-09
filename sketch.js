let diceArr;
let gridSize = 4;

let types = [];

let canvasSize = 375;

let heartCount = 1;
let keyCount = 1;
let specialKeyCount = 0;

let heartSpan;
let keySpan;
let specialKeySpan;

let markers = [];

function setup() {

    if (windowWidth < 375) canvasSize = windowWidth

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

    canvas.addEventListener('contextmenu', event => event.preventDefault());
}

function draw() {

    background("#0a0a0a");

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {

            diceArr[i][j].display();
        }
    }

    for (let i = 0; i < markers.length; i++) {
        markers[i].display();
    }
}

function mousePressed() {

    if (mouseButton == LEFT)  {

        markers.push(new Marker(mouseX, mouseY));

    } else if (mouseButton == RIGHT) {

        for (let i = markers.length-1; i >= 0; i--) {

            if (markers[i].clicked(mouseX, mouseY)) {

                console.log('hi')
                markers.splice(i, 1);
            }
        }

    } else if (mouseButton == CENTER) {

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {

                diceArr[i][j].reroll(mouseX, mouseY);
            }
        }
    }

    draw();
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