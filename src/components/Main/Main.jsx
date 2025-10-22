import editButton from "../../images/edit-button.svg";
import addButton from "../../images/add-button.svg";
import addButtonMobile from "../../images/add-button-mobile.svg";

import { useContext, useState } from "react";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup";
import Card from "./components/Card/Card";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main() {
  const {
    currentUser,
    handleOpenPopup,
    cards,
    handleCardLike,
    handleCardDelete,
    handleAddPlaceSubmit,
  } = useContext(CurrentUserContext);

  const [selectedCard, setSelectedCard] = useState({});

  function handleImageClick(card) {
    setSelectedCard(card);
    handleOpenPopup({
      title: "",
      children: <ImagePopup card={card} />,
    });
  }

  const newCardPopup = {
    title: "Novo Local",
    children: <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} />,
  };

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

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
              src={currentUser.avatar}
              alt="Foto de perfil"
            />
            <span className="profile__edit-icon"></span>
          </div>
        </button>
        <div className="profile__info">
          <div className="profile__text">
            <span className="profile__text-name">{currentUser.name}</span>
            <span className="profile__text-description">
              {currentUser.about}
            </span>
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
            <Card
              key={card._id}
              card={card}
              onImageClick={handleImageClick}
              onCardLike={handleCardLike}
              onDeleteCard={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
