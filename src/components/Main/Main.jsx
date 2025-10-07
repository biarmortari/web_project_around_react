import avatar from "../../images/avatar.png";
import editButton from "../../images/edit-button.svg";
import addButton from "../../images/add-button.svg";
import addButtonMobile from "../../images/add-button-mobile.svg";

import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New Card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <main className="content">
        <div className="profile">
          <button
            className="profile__button-avatar"
            type="button"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <div className="profile__avatar-container">
              <img
                className="profile__avatar"
                src={avatar}
                alt="Foto de perfil"
              />
              <span className="profile__edit-icon"></span>
            </div>
          </button>
          <div className="profile__info">
            <div className="profile__text">
              <span className="profile__text-name">Jacques Cousteau</span>
              <span className="profile__text-description">Explorador</span>
            </div>
            <button
              className="profile__button-edit"
              onClick={() => handleOpenPopup(editProfilePopup)}
              type="button"
            >
              <img
                className="profile__button-edit-icon"
                src={editButton}
                alt="Botão de edição"
              />
            </button>
          </div>
          <button
            className="profile__button-add"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <picture>
              <source media="(max-width: 601px)" src={addButtonMobile} />
              <img
                className="profile__button-add-icon"
                src={addButton}
                alt="Botao de ediçao"
              />
            </picture>
          </button>
        </div>
        <div className="elements"></div>
        <template id="card-template">
          <div className="element">
            <img className="element__image" src=" " alt=" " />
            <button className="element__trash-button" type="button">
              <img
                className="element__trash-image"
                src="./images/trash-button.svg"
                alt="Botão de excluir"
              />
            </button>
            <div className="element__subtitle">
              <p className="element__text"></p>
              <button className="element__like-button" type="button">
                <img
                  className="element__like-image"
                  src="./images/like-button.svg"
                  alt="Botão de curtir"
                />
              </button>
            </div>
          </div>
        </template>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}

export default Main;
