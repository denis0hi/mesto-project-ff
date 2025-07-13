import {
  initialCards,
  cardsContainer,
  createCard,
  deleteCard,
} from "./components/cards.js";
import {
  openModal,
  closeModal,
  newCardSubmit,
  newCardForm,
  popUpEdit,
  editProfileForm,
  profileTitle,
  profileDescription,
  popUpIsAnimated,
} from "./components/modal.js";
import "./pages/index.css";

// buttons
const buttonCreateCard = document.querySelector(".profile__add-button");
const buttonProfileEdit = document.querySelector(".profile__edit-button");

// modal
const popUpNewCard = document.querySelector(".popup_type_new-card");
const popupTypeEdit = document.querySelector(".popup_type_edit");

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, deleteCard);
  cardsContainer.append(cardElement);
});

buttonCreateCard.addEventListener("click", () => {
  popUpNewCard.classList.add(popUpIsAnimated);
  setTimeout(() => {
    openModal(popUpNewCard);
  }, 10);
});

buttonProfileEdit.addEventListener("click", () => {
  const currentName = profileTitle.textContent;
  const currentDescription = profileDescription.textContent;

  editProfileForm.elements["name"].value = currentName;
  editProfileForm.elements["description"].value = currentDescription;

  popupTypeEdit.classList.add(popUpIsAnimated);

  setTimeout(() => {
    openModal(popupTypeEdit);
  }, 10);
});

document.querySelectorAll(".popup .popup__close").forEach((button) => {
  button.addEventListener("click", closeModal);
});

newCardForm.addEventListener("submit", newCardSubmit);

editProfileForm.addEventListener("submit", popUpEdit);
