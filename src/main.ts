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

const maxFlippedCards = 2;
let flippedCards : number = 0;
let firstFlippedCard : string | null;
let secondFlippedCard : string | null;

const flipCard = (card: HTMLDivElement) => {
    // console.log(' CARD ',  card.children[1].getAttribute("src"));

    // if (flippedCards === maxFlippedCards) {
    //     return
    // }  else {
    //     card.classList.toggle("cards__flipped");
    //     if (flippedCards === 0) {
    //         firstFlippedCard = card.children[1].getAttribute("src");
    //     }
    
    //     if (flippedCards === 1) {
    //         secondFlippedCard = card.children[1].getAttribute("src");
    //     }
    // }


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
    console.log('TEST ', firstFlippedCard);
    console.log('TEST ', secondFlippedCard);

    const matchedCards = document.querySelectorAll<HTMLDivElement>(".cards__flipped");

    if (firstFlippedCard === secondFlippedCard) {
        // alert("match !!")

        matchedCards.forEach(card =>
            card.classList.toggle("cards__matched")
        );
        resetFlippedCards();
    } else {
        console.log('TKFKFDSNFKDNT ');

        setTimeout(() => {
            matchedCards.forEach(card =>
                card.classList.remove("cards__flipped")
            )
        }, 1500);

        resetFlippedCards();
    }
};

const resetFlippedCards = () => {
    flippedCards = 0;
    firstFlippedCard = "";
    secondFlippedCard = "";
}

cards.forEach(card => card.addEventListener("click", () => {
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
