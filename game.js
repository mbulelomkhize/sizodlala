let array = [];
let i = 0;
let j = 0;
let pass = 0;

let comparisons = 0;
let swaps = 0;

let mode = "";

/* ================= INIT ================= */

function initBubble() {
    mode = "bubble";
    generateArray();
}

function initSelection() {
    mode = "selection";
    generateArray();
}

function initInsertion() {
    mode = "insertion";
    generateArray();
}

/* ================= ARRAY ================= */

function generateArray() {

    array = [];

    for (let k = 0; k < 10; k++) {
        array.push(Math.floor(Math.random() * 90) + 10);
    }

    i = 0;
    j = 0;
    pass = 0;

    comparisons = 0;
    swaps = 0;

    render();
    updateStats();
}

/* ================= RENDER ================= */

function render() {

    const c = document.getElementById("array-container");
    c.innerHTML = "";

    for (let n = 0; n < array.length; n++) {

        const bar = document.createElement("div");
        bar.className = "bar";

        bar.style.height = (array[n] * 3) + "px";
        bar.textContent = array[n];

        // 🧠 VISUAL EDUCATION STATES

        if (mode === "bubble") {

            if (n === i || n === i + 1)
                bar.classList.add("compare");

            if (n >= array.length - pass)
                bar.classList.add("sorted");
        }

        if (mode === "selection") {

            if (n >= pass)
                bar.classList.add("sorted");

            if (n === i)
                bar.classList.add("active");

            if (n === j)
                bar.classList.add("minimum");
        }

        if (mode === "insertion") {

            if (n <= i)
                bar.classList.add("sorted");

            if (n === i)
                bar.classList.add("active");
        }

        c.appendChild(bar);
    }
}

/* ================= STATS ================= */

function updateStats() {

    document.getElementById("stats").innerText =
        "Comparisons: " + comparisons +
        " | Swaps: " + swaps;

}

/* ================= BUBBLE SORT ================= */

function moveLeft() {
    if (i > 0) i--;
}

function moveRight() {
    if (i < array.length - 2 - pass) i++;
}

function compare(choice) {

    let shouldSwap = array[i] > array[i + 1];

    comparisons++;

    if (choice === shouldSwap && shouldSwap) {

        swap(i, i + 1);
        swaps++;

    }

    i++;

    if (i >= array.length - 1 - pass) {
        i = 0;
        pass++;
    }

    render();
    updateStats();
}

/* ================= SELECTION SORT ================= */

function selectMin() {
    j = i;
}

function scanNext() {

    if (j < array.length - 1) {
        j++;

        comparisons++;

        if (array[j] < array[i]) {
            i = j;
        }
    }

    updateStats();
    render();
}

function placeMin() {

    swap(pass, i);

    swaps++;

    pass++;
    i = pass;
    j = pass;

    render();
}

/* ================= INSERTION SORT ================= */

function pick() {
    j = i + 1;
}

function shift() {

    if (j > 0 && array[j] < array[j - 1]) {

        swap(j, j - 1);

        swaps++;
        comparisons++;

        j--;

    }

    render();
    updateStats();
}

function insert() {

    i++;

    if (i >= array.length) {
        i = array.length - 1;
    }

    render();
}

/* ================= SWAP ================= */

function swap(a, b) {

    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
