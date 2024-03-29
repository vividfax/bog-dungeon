let diceArr;
let gridSize = 4;

let types = [];

let canvasSize = 375;

let heartCount;
let keyCount;
let specialKeyCount;
let xpCount = 0;

let heartSpan;
let keySpan;
let specialKeySpan;
let xpSpan;

let markers = [];

let flagImage;
let skullImage;
let foodImage;
let keyImage;
let rerollImage;
let specialKeyImage;
let chestImage;
let lockImage;

let timeClicked = 0;
let timePressed = 0;
let isTouching;

let player;

function preload() {

    flagImage = loadImage("./images/flag.png");
    skullImage = loadImage("./images/skull.png");
    foodImage = loadImage("./images/food.png");
    keyImage = loadImage("./images/key.png");
    rerollImage = loadImage("./images/reroll.png");
    specialKeyImage = loadImage("./images/specialKey.png");
    chestImage = loadImage("./images/chest.png");
    lockImage = loadImage("./images/lock.png");
}

function setup() {

    if (windowWidth < 375) canvasSize = windowWidth

    createCanvas(canvasSize, canvasSize).parent("sketchHolder");

    angleMode(DEGREES);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);

    setupButtons();
    canvas.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener("gesturestart", event => event.preventDefault());

    restart();
}

function draw() {

    if (mouseIsPressed) timeClicked++;
    else timeClicked = 0;

    if (isTouching) timePressed++;
    else timePressed = 0;
}

// function touchStarted() {

//     isTouching = true;
// }

// function touchEnded() {

//     isTouching = false;

//     if (timePressed >= 25 || timeClicked >= 25) {

//         for (let i = 0; i < gridSize; i++) {
//             for (let j = 0; j < gridSize; j++) {

//                 diceArr[i][j].reroll(mouseX, mouseY);
//             }
//         }
//     } else {

//         let markerClicked = false;

//         for (let i = markers.length-1; i >= 0; i--) {

//             if (markers[i].clicked(mouseX, mouseY)) {
//                 markers.splice(i, 1);
//                 markerClicked = true;
//                 break;
//             }
//         }

//         if (!markerClicked) markers.push(new Marker(mouseX, mouseY));
//     }

//     display();
// }

function display() {

    background("#2A2F1F");

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {

            diceArr[i][j].display();
        }
    }

    for (let i = 0; i < markers.length; i++) {
        markers[i].display();
    }

    player.display();
}

function mouseReleased() {

    if (timePressed >= 25 || timeClicked >= 25) {

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {

                diceArr[i][j].reroll(mouseX, mouseY);
            }
        }
    } else {

        let markerClicked = false;

        for (let i = markers.length-1; i >= 0; i--) {

            if (markers[i].clicked(mouseX, mouseY)) {
                markers.splice(i, 1);
                markerClicked = true;
                break;
            }
        }

        if (!markerClicked) markers.push(new Marker(mouseX, mouseY));
    }

    display();
}

function keyPressed() {

    player.update();

    display();
}

function setupButtons() {

    heartSpan = select("#numberOfHearts");
    keySpan = select("#numberOfKeys");
    specialKeySpan = select("#numberOfSpecialKeys");
    xpSpan = select("#numberOfXp");

    select("#minusHeart").mouseReleased(subtractHeart);
    select("#plusHeart").mouseReleased(addHeart);
    select("#minusKey").mouseReleased(subtractKey);
    select("#plusKey").mouseReleased(addKey);
    select("#minusSpecialKey").mouseReleased(subtractSpecialKey);
    select("#plusSpecialKey").mouseReleased(addSpecialKey);
    select("#minusXp").mouseReleased(subtractXp);
    select("#plusXp").mouseReleased(addXp);

    select("#restart").mouseReleased(restart);
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

function subtractXp() {

    xpCount--;
    xpSpan.html(xpCount);
}

function addXp() {

    xpCount++;
    xpSpan.html(xpCount);
}

function restart() {

    heartCount = 2;
    keyCount = 2;
    specialKeyCount = 0;

    heartSpan.html(heartCount);
    keySpan.html(keyCount);
    specialKeySpan.html(specialKeyCount);

    diceArr = [...Array(gridSize)].map(e => Array(gridSize));
    heartCount
    types = types.concat(["🚩"]);
    types = types.concat(["💀", "💀", "💀", "💀", "💀", "💀"]);
    types = types.concat(["🍖", "🍖"]);
    types = types.concat(["🔑", "🔑", "🔑", "🔑"]);
    types = types.concat(["🔃"]);
    types = types.concat(["🗝️"]);
    types = types.concat(["🧰"]);
    types = shuffle(types);

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {

            let type = types.pop();
            diceArr[i][j] = new Dice(i, j, type);

            if (type == "🚩") {
                player = new Player(i, j);
            }
        }
    }

    markers = [];

    display();
}