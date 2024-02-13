// DOM declaration
const firstTriInput = document.querySelector('[first-tri-input]');
const secondTriInput = document.querySelector('[second-tri-input]');

const firstRecInput = document.querySelector('[first-rec-input]');
const secondRecInput = document.querySelector('[second-rec-input]');

const firstParaInput = document.querySelector('[first-para-input]');
const secondParaInput = document.querySelector('[second-para-input]');

const triBtn = document.querySelector('[tri-btn]');
const recBtn = document.querySelector('[rec-btn]');
const paraBtn = document.querySelector('[para-btn]');
// DOM declaration

// first event listener
triBtn.addEventListener('click', () => {
    let fTriIn = parseFloat(firstTriInput.value);
    let sTriIn = parseFloat(secondTriInput.value);
    console.log(sTriIn);
    console.log(sTriIn)
    const triResult = 0.5 * fTriIn * sTriIn
    console.log(triResult);
})

recBtn.addEventListener('click', () => {
    let fRecIn = parseFloat(firstRecInput.value);
    console.log(fRecIn);
    let sRecIn = parseFloat(secondRecInput.value);
    const recResult = fRecIn * sRecIn;
    console.log(recResult);
})

paraBtn.addEventListener('click', () => {
    let fParIn = parseFloat(firstParaInput.value);
    let sParIn = parseFloat(secondParaInput.value);
    const paraResult = fParIn * sParIn;
    console.log(paraResult);
})