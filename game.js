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

/* ================= RENDER (3D UPGRADE) ================= */

function render() {

    const c = document.getElementById("array-container");
    c.innerHTML = "";

    for (let n = 0; n < array.length; n++) {

        const bar = document.createElement("div");
        bar.className = "bar";

        bar.style.height = (array[n] * 3) + "px";
        bar.textContent = array[n];

        /* ================= VISUAL STATES ================= */

        // BUBBLE SORT
        if (mode === "bubble") {

            if (n === i || n === i + 1)
                bar.classList.add("compare");

            if (n >= array.length - pass)
                bar.classList.add("sorted");

        }

        // SELECTION SORT
        if (mode === "selection") {

            if (n === j)
                bar.classList.add("minimum");

