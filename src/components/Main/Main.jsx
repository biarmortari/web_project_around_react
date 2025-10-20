import React from "react";

import editButton from "../../images/edit-button.svg";
import addButton from "../../images/add-button.svg";
import addButtonMobile from "../../images/add-button-mobile.svg";

import { useEffect, useState, useContext } from "react";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main() {
  const [cards, setCards] = useState([]);

  const { currentUser } = useContext(CurrentUserContext);
  const { handleOpenPopup, handleClosePopup } = useContext(CurrentUserContext);

  useEffect(() => {
    api.getAppInfo().then(([cards]) => {
      setCards(cards);
    });
  }, []);

  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    try {
      const newCard = await api.updateLike(card._id, !isLiked);

      setCards((prevCards) =>
        prevCards.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
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
              onImageClick={handleOpenPopup}
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
