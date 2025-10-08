import Avatar from "../../images/Avatar.png";
import editButton from "../../images/edit-button.svg";
import addButton from "../../images/add-button.svg";
import addButtonMobile from "../../images/add-button-mobile.svg";

import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__button-avatar"
          type="button"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={Avatar}
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
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onImageClick={handleOpenPopup} />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
