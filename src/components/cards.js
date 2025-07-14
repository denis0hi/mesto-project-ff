import { openModal, popUpIsAnimated } from "./modal.js";

// Template
const cardTemplate = document.querySelector("#card-template").content;

// Image showing
const popUpImageScreen = document.querySelector(".popup_type_image");
const popUpImage = document.querySelector(".popup__image");

// New Card
const popUpNewCard = document.querySelector(".popup_type_new-card");

// Container
const cardsContainer = document.querySelector(".places__list");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// createCard
function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.querySelector(".card__title").textContent = cardData.name;

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => deleteCard(cardElement));

  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", () =>
      likeButton.classList.toggle("card__like-button_is-active")
    );

  // modal cards
  cardImage.addEventListener("click", ({ target }) => {
    const { src: link, alt: name } = target;

    popUpImageScreen.querySelector(".popup__caption").textContent = name;
    popUpImage.src = link;

    popUpImageScreen.classList.add(popUpIsAnimated);

    openModal(popUpImageScreen);
  });

  return cardElement;
}

// deleteCard
function deleteCard(cardElement) {
  cardElement.remove();
}

export { initialCards, cardsContainer, popUpNewCard, createCard, deleteCard };
