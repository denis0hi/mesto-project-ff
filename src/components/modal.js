// Styles
const popUpClassOpened = "popup_is-opened";
const popUpIsAnimated = "popup_is-animated";

// forms
const newCardForm = document.forms["new-place"];
const editProfileForm = document.forms["edit-profile"];

// Profile
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//closeModal
const closeModal = (popup) => {
  popup.classList.remove(popUpClassOpened);
  document.removeEventListener("keydown", handleEscapeKey);
};

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

document.querySelectorAll(".popup").forEach((popup) => {
  // Обработчик клика по оверлею
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target === popup) {
      closeModal(popup);
    }
  });
});

//openModal
function openModal(modal) {
  modal.classList.add(popUpIsAnimated);

  requestAnimationFrame(() => {
    modal.classList.add("popup_is-opened");
  });
  document.addEventListener("keydown", handleEscapeKey);
}

export {
  openModal,
  closeModal,
  popUpClassOpened,
  profileTitle,
  profileDescription,
  newCardForm,
  editProfileForm,
};
