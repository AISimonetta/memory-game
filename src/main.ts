import './main.scss';

const cards = document.querySelectorAll<HTMLDivElement>(".cardContent");

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