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

/////////// cards
const cards = document.querySelectorAll<HTMLDivElement>(".cardContent");

if (!cards) {
    throw new Error("There is a problem with the selector");
}

let flippedCards : number = 0;
// let firstFlippedCard =
// let secondFlippedCard:

const flipCard = (card: HTMLDivElement) => {
    console.log(' CARD ',  card.children);

    if (flippedCards === 2) {
        return
    } else {
        card.classList.toggle("cards__flipped");
    }
    flippedCards = flippedCards + 1;
}

// const checkCardsMatch = (card: HTMLDivElement) => {
//     var youtubeimgsrc = document.getElementById("youtubeimg").src;
// }



// cards.forEach(card => card.

// );

cards.forEach(card=> card.addEventListener("click", () => {

    flipCard(card);
}));



// let firstFlippedCard: HTMLDivElement | null = null;
// let secondFlippedCard: HTMLDivElement | null = null;
// let hasFlippedCard = false;
// let lockFlipping = false;


// const checkFlip = (card: HTMLDivElement) => {
//     if (lockFlipping) return;
//     if (firstFlippedCard === card) return; // not to click twice
//         card.classList.toggle("cards__flip");
//     if (!hasFlippedCard) {
//         hasFlippedCard = true;
//         firstFlippedCard = card;
//         return;
//     }
//     secondFlippedCard = card;
// }

// cards.forEach(card=> card.addEventListener("click", () => {
//     checkFlip(card);
// }));

// //compare an ids !
// // const checkIfMatch = () => {
// //     let match = firstFlippedCard. === secondFlippedCard;
// //     if (match) {
// //         disableCards()
// //     } else {
// //         cardsUnflip()
// //     }
// // }

// // const disableCards = () => {
// //     firstCard.removeEventListener("click", checkFlip);
// //     secondCard.removeEventListener("click", checkFlip);
// // }

// // const resetCards = () => {

// // }

// // const cardsUnflip = () => {
// // }

// // const randomOrder = () => {
//     // Math.floor(Math.random() * 12)

// // }
