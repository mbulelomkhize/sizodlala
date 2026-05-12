let array = [];

let algo = "bubble";

let i = 0;
let j = 0;
let passLimit = 9;

let selectedMin = 0;
let insertionKey = 0;

let comparisons = 0;
let swaps = 0;

/* ================= ARRAY ================= */

function generateArray() {

    array = [];

    for (let k = 0; k < 10; k++) {
        array.push(Math.floor(Math.random() * 90) + 10);
    }

    i = 0;
    j = 0;
    passLimit = array.length - 1;

    render();
}

/* ================= RENDER ================= */

function render() {

    const c = document.getElementById("array-container");
    c.innerHTML = "";

    for (let n = 0; n < array.length; n++) {

        const bar = document.createElement("div");
        bar.className = "bar";

        bar.style.height = (array[n] * 3) + "px"; // 🔥 FIXED VISIBILITY

        bar.textContent = array[n];

        c.appendChild(bar);
    }
}

/* ================= UI ================= */

function setAlgorithm(a, btn) {

    algo = a;

    document.querySelectorAll("[id^='algo-']")
        .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    resetGame();
}

/* ================= RESET ================= */

function resetGame() {

    comparisons = 0;
    swaps = 0;

    i = 0;
    j = 0;
    passLimit = 9;

    generateArray();

    updateStats();
}

/* ================= STATS ================= */

function updateStats() {

    document.getElementById("comparisons").innerText = comparisons;
    document.getElementById("swaps").innerText = swaps;
}

/* ================= BUBBLE SORT (FIXED PASSES) ================= */

function moveLeft() {
    if (i > 0) i--;
}

function moveRight() {
    if (i < passLimit) i++;
}

function compare(choice) {

    let a = array[i];
    let b = array[i + 1];

    let shouldSwap = a > b;

    comparisons++;

    if (choice === shouldSwap && shouldSwap) {
        swap(i, i + 1);
        swaps++;
    }

    i++;

    if (i >= passLimit) {
        i = 0;
        passLimit--;
    }

    render();
    updateStats();
}

/* ================= SELECTION SORT ================= */

function selectMin() {
    selectedMin = j;
}

function scanNext() {

    j++;

    comparisons++;

    if (array[j] < array[selectedMin]) {
        selectedMin = j;
    }

    updateStats();
}

function placeMin() {

    swap(i, selectedMin);
    swaps++;

    i++;
    j = i;
    selectedMin = i;

    render();
}

/* ================= INSERTION SORT ================= */

function pick() {
    insertionKey = i + 1;
}

function shift() {

    if (array[insertionKey] < array[insertionKey - 1]) {

        swap(insertionKey, insertionKey - 1);

        insertionKey--;

        swaps++;
        comparisons++;
    }

    render();
}

function insert() {
    i++;
}

/* ================= SWAP ================= */

function swap(x, y) {

    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

/* ================= INIT ================= */

generateArray();
render();
