import './main.scss';

const cards = document.querySelectorAll<HTMLDivElement>(".cardContent");
const finley1block = document.querySelector<HTMLImageElement>("#finley");
const finley12block = document.querySelector<HTMLImageElement>("#finley2");
const nancy1 = document.querySelector<HTMLImageElement>("#finley");
const nancy2 = document.querySelector<HTMLImageElement>("#finley2");
const finley1block = document.querySelector<HTMLImageElement>("#finley");
const finley12block = document.querySelector<HTMLImageElement>("#finley2");
const finley1block = document.querySelector<HTMLImageElement>("#finley");
const finley12block = document.querySelector<HTMLImageElement>("#finley2");
const finley1block = document.querySelector<HTMLImageElement>("#finley");
const finley12block = document.querySelector<HTMLImageElement>("#finley2");
const finley1block = document.querySelector<HTMLImageElement>("#finley");
const finley12block = document.querySelector<HTMLImageElement>("#finley2");
const finley1block = document.querySelector<HTMLImageElement>("#finley");
const finley12block = document.querySelector<HTMLImageElement>("#finley2");

if (!cards) {
    throw new Error("There is aproblem with the selector");
    
}

//flip cards
const flipCards = (card : HTMLDivElement ) => {
    card.classList.toggle("cards__flip");
}
cards.forEach(card => card.addEventListener("click", () => {
    flipCards(card)
}));

//matching cards :

const matchingCards = () => {

}