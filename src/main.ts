import './main.scss';
import { friendsArray } from './friendsArray';

const cardContainerAll = document.querySelector<HTMLDivElement>(".cards__cardContainer");

if (!cardContainerAll) {
    throw new Error("There is a problem with the selector");
}

const friendCards = (friendsArray: Friends[]): string => {
    const cardFriendsHtml = friendsArray
        .map((friends) => {
            return `
                <div class="cardContent">
                    <img class="frontCard" alt="Octonauts round logo" src="${friends.imageFront}">
                    <img class="backCard" src="${friends.imageBack}">
                </div>
            `;
        })
        .join("");
    return cardFriendsHtml;
};

cardContainerAll.innerHTML = friendCards(friendsArray)

//******** MEMORY CARDS ******/
const cards = document.querySelectorAll<HTMLDivElement>(".cardContent");
const buttonReset = document.querySelector<HTMLButtonElement>(".btn");


if (!cards || !buttonReset) {
    throw new Error("There is a problem with the selector");
}

let maxFlippedCards = 2;
let flippedCards : number = 0;
let firstFlippedCard : string | null;
let secondFlippedCard : string | null;

const flipCard = (card: HTMLDivElement) => {
    if (flippedCards < maxFlippedCards) {
        card.classList.toggle("cards__flipped");
        if (flippedCards === 0) {
            firstFlippedCard = card.children[1].getAttribute("src");
        }
        if (flippedCards === 1) {
            secondFlippedCard = card.children[1].getAttribute("src");
        }
    } else {
        return;
    }
    flippedCards = flippedCards + 1;
    if (flippedCards === 2) {
        checkCardsMatch(firstFlippedCard, secondFlippedCard);
    }
}
const checkCardsMatch = (firstFlippedCard: string | null, secondFlippedCard: string | null) => {
    console.log("TEST", firstFlippedCard);
    console.log("TEST", secondFlippedCard);
    const matchedCards = document.querySelectorAll<HTMLDivElement>(".cards__flipped");
    if (firstFlippedCard === secondFlippedCard) {
        matchedCards.forEach(card => {
            card.classList.add("cards__matched");
            }
        );
        //asd some conffetti!!
        resetFlippedCards();
        // lockCards();
    } else {
        //toggle screen red or black
        console.log('NOMATCH ');
        setTimeout(() => {
            matchedCards.forEach(card => {
                if(!card.classList.contains("cards__matched"))
                card.classList.remove("cards__flipped")
            }
            );
            resetFlippedCards();
        }, 1000);
    };
}
const resetFlippedCards = () => {
    flippedCards = 0;
    firstFlippedCard = null;
    secondFlippedCard = null;
}

const resetGame = () => {
    maxFlippedCards = 2;
    flippedCards = 0;
    firstFlippedCard = null;
    secondFlippedCard = null;

    const cards = document.querySelectorAll<HTMLDivElement>(".cardContent");
        cards.forEach(card  => {
            let randomOrder = Math.floor(Math.random() * 12);
            card.style.order = randomOrder.toString();
    })
}
buttonReset.addEventListener("click", resetGame)

cards.forEach(card => card.addEventListener("click", () => {
    flipCard(card);
}));



