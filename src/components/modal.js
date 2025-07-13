import {
  createCard,
  cardsContainer,
  deleteCard,
  popUpNewCard,
} from "./cards.js";

// Styles
const popUpClassOpened = "popup_is-opened";
const popUpIsAnimated = "popup_is-animated";

// Popups
const popupTypeEdit = document.querySelector(".popup_type_edit");

// forms
const newCardForm = document.forms["new-place"];
const editProfileForm = document.forms["edit-profile"];

// Profile
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//closeModal
const closeModal = () => {
  document.querySelector(".popup_is-opened").classList.remove(popUpClassOpened);
};

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    closeModal();
  }
}

function handleOverlayClick(evt) {
  if (evt.target.classList.contains("popup_is-opened")) {
    closeModal();
  }
}

//openModal
function openModal(modal) {
  modal.classList.add(popUpClassOpened);
  document.addEventListener("keydown", handleEscapeKey);
  document.addEventListener("click", handleOverlayClick);
}
// newCardSubmit
function newCardSubmit(evt) {
  evt.preventDefault();

  const placeName = newCardForm.elements["place-name"].value;
  const imageUrl = newCardForm.elements.link.value;

  const newCardData = {
    name: placeName,
    link: imageUrl,
  };

  const cardElement = createCard(newCardData, deleteCard);

  newCardForm.reset();
  popUpNewCard.classList.remove(popUpClassOpened);

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

  console.log(name);
}

document.addEventListener("animationend", function (e) {
  if (e.animationName === "fade-out") {
    e.target.classList.remove("did-fade-in");
  }
});

export {
  openModal,
  closeModal,
  newCardSubmit,
  popUpEdit,
  popUpIsAnimated,
  profileTitle,
  profileDescription,
  newCardForm,
  editProfileForm,
};
