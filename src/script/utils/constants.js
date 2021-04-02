const validatorSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const imagePopup = document.querySelector(".popup_purpose_view-full-picture");
const imageContainer = imagePopup.querySelector(".popup__full-image-container");
const fullImage = imageContainer.querySelector(".popup__full-image");
const imageCaption = imageContainer.querySelector(".popup__image-caption");

const cardTemplateSelector = "#card-template";
const userProfile = document.querySelector(".profile");
const addImagePopup = document.querySelector(".popup_purpose_add-picture");
const editUserPopup = document.querySelector(".popup_purpose_edit-user");
const addImageSubmit = addImagePopup.querySelector(
  validatorSettings.submitButtonSelector
);
const cardSectionSelector = ".gallery";
const popups = document.querySelectorAll(".popup");

const userName = userProfile.querySelector(".profile__user-name");
const userTitle = userProfile.querySelector(".profile__user-title");
const editButton = userProfile.querySelector(".profile__edit-button");
const addButton = userProfile.querySelector(".profile__add-image-button");

const userNameInput = editUserPopup.querySelector(".popup__input_type_name");
const userTitleInput = editUserPopup.querySelector(
  ".popup__input_type_user-title"
);

const imageTitleInput = addImagePopup.querySelector(
  ".popup__input_type_image-title"
);
const imageLinkInput = addImagePopup.querySelector(
  ".popup__input_type_image-link"
);

export {
  validatorSettings,
  cardTemplateSelector,
  userProfile,
  addImagePopup,
  editUserPopup,
  addImageSubmit,
  cardSectionSelector,
  popups,
  userName,
  userTitle,
  editButton,
  addButton,
  userNameInput,
  userTitleInput,
  imageTitleInput,
  imageLinkInput,
  imagePopup,
  imageContainer,
  fullImage,
  imageCaption,
};