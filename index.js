// Dish-inputs
const dishFillinng = document.getElementById("dishFilling");
const dishSide = document.getElementById("dishSide");
const dishSalad = document.getElementById("dishSalad");

// Ending Screen
const winnerSrceen = document.getElementById("winnerScreen");
const dishResulut = document.getElementById("dishResult");

// Collection of values for dish-inputs
const menuFilling = ["Putkispagetti", "Riisi", "Gnocchi", "Penne", "Potat", "Botat", "Fusilli", "Nauhapasta", "Munapasta"];
const menuSide = ["Liekkisiipi", "Reisikoipi", "Lihasuikale", "Lihapulla", "Pekoni", "Kanapihvi", "Jauhelihapihvi", "Jauheliha"];
const menuSalad = ["Kreikkalainen", "Olivje", "Kana-taco", "Mimoza", "Kalasalaatti", "Retiisisalaatti", "Porkkanasalaatti", "Aurinkosalaatti"];


// Invoked by a lock-button. Styles the button depending on its "marked" status. Checks if all three of buttons are locked.
function toggleMarked(element) {
    element.classList.toggle("redBackground");
    element.parentElement.getElementsByClassName("styledInput")[0].classList.toggle("toggleParent");
    runCheck();
}

// Invoked by a button at the bottom of the page. Inserts a value into dish-inputs that are not locked.
async function randomizeInputs() {
    if (!dishFillinng.classList.contains("toggleParent")) {
        dishFillinng.value = "...";
        await sleep(1000);
        dishFillinng.value = menuFilling[Math.floor(Math.random()*menuFilling.length)];
    }
    if (!dishSide.classList.contains("toggleParent")) {
        dishSide.value = "...";
        await sleep(1000);
        dishSide.value = menuSide[Math.floor(Math.random()*menuSide.length)];
    }
    if (!dishSalad.classList.contains("toggleParent")) {
        dishSalad.value = "...";
        await sleep(1000);
        dishSalad.value = menuSalad[Math.floor(Math.random()*menuSalad.length)];
    }
}

// Thanks, Dan Dascalescu!
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// If all of the three dish-inputs are locked, modifies the ending screen and shows it.
async function runCheck() {
    if (dishFillinng.classList.contains("toggleParent") && dishSide.classList.contains("toggleParent") && dishSalad.classList.contains("toggleParent")) {
        await sleep(1000);
        winnerSrceen.style.display = "block";
        winnerSrceen.classList.toggle("screenVisible");
        dishResulut.innerText = `${dishFillinng.value ? dishFillinng.value : "Putkispagetti"},\
        ${dishSide.value ? String(dishSide.value).toLowerCase() : "liekkisiipi"} ja\
        ${dishSalad.value ? String(dishSalad.value).toLowerCase() : "kreikkalainen"} -ateria!`;
    }
}

// Invoked by a button on the ending screen in the top-right corner.
function closeScreen() {
    winnerSrceen.classList.toggle("screenVisible");
}