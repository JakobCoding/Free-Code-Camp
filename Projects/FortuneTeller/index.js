let fortune1 = "Your dog will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";


let selectedFortune;
// How to generate a random number between 1 & 5 rounded down

let fortuneEl = document.getElementById("fortune-el")
console.log(fortuneEl)

function generateFortune(){
    let randomNumber = Math.floor(Math.random() * 5) + 1;
if (randomNumber === 1) {
    selectedFortune = fortune1;
    console.log(selectedFortune);
    fortuneEl.textContent = (selectedFortune)
} 
else if (randomNumber === 2) {
    selectedFortune = fortune2;
    console.log(selectedFortune);
    fortuneEl.textContent = (selectedFortune)
} 
else if (randomNumber === 3) {
    selectedFortune = fortune3;
    console.log(selectedFortune);
    fortuneEl.textContent = (selectedFortune)
} 
else if (randomNumber === 4) {
    selectedFortune = fortune4;
    console.log(selectedFortune);
    fortuneEl.textContent = (selectedFortune)
} 
else if (randomNumber === 5) {
    selectedFortune = fortune5;
    console.log(selectedFortune);
    fortuneEl.textContent = (selectedFortune)
} 
}


