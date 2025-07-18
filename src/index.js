import {
  initialCards,
  createCard,
  deleteCard,
  likeCard,
} from "./components/cards.js";
import {
  openModal,
  closeModal,
  newCardForm,
  editProfileForm,
  profileTitle,
  profileDescription,
  popUpClassOpened,
} from "./components/modal.js";
import "./pages/index.css";

// buttons
const buttonCreateCard = document.querySelector(".profile__add-button");
const buttonProfileEdit = document.querySelector(".profile__edit-button");

// modal
const popUpNewCard = document.querySelector(".popup_type_new-card");
const popupTypeEdit = document.querySelector(".popup_type_edit");

// Container
const cardsContainer = document.querySelector(".places__list");

// Image showing
const popUpImageScreen = document.querySelector(".popup_type_image");
const popUpImage = document.querySelector(".popup__image");

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, deleteCard, likeCard);
  cardsContainer.append(cardElement);
});

buttonCreateCard.addEventListener("click", () => {
  openModal(popUpNewCard);
});

buttonProfileEdit.addEventListener("click", () => {
  const currentName = profileTitle.textContent;
  const currentDescription = profileDescription.textContent;

  editProfileForm.elements["name"].value = currentName;
  editProfileForm.elements["description"].value = currentDescription;

  openModal(popupTypeEdit);
});

document.querySelectorAll(".popup .popup__close").forEach((button) => {
  button.addEventListener("click", (evt) => {
    const popup = evt.target.closest(".popup");

    if (popup) {
      closeModal(popup);
    }
  });
});

// modal cards
function handleCardImageClick({ target }) {
  const { src: link, alt: name } = target;

  popUpImageScreen.querySelector(".popup__caption").textContent = name;
  popUpImage.src = link;

  openModal(popUpImageScreen);
}

// open image modal
document.querySelectorAll(".card__image").forEach((image) => {
  image.addEventListener("click", handleCardImageClick);
});

// newCardSubmit
function newCardSubmit(evt, cardsContainer) {
  evt.preventDefault();

  const placeName = newCardForm.elements["place-name"].value;
  const imageUrl = newCardForm.elements.link.value;

  const newCardData = {
    name: placeName,
    link: imageUrl,
  };

  const cardElement = createCard(newCardData, deleteCard, likeCard);

  newCardForm.reset();
  closeModal(popUpNewCard);

  cardsContainer.append(cardElement);
}

// popUpEdit
function popUpEdit(evt) {
  evt.preventDefault();

  const name = editProfileForm.elements["name"].value;
  const description = editProfileForm.elements["description"].value;

  profileTitle.textContent = name;
  profileDescription.textContent = description;

  popupTypeEdit.classList.remove(popUpClassOpened);
}

newCardForm.addEventListener("submit", (evt) =>
  newCardSubmit(evt, cardsContainer)
);
editProfileForm.addEventListener("submit", popUpEdit);
