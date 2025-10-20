import React from "react";
import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

function Card({ card, onImageClick, onDeleteCard, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  const { name, link, likes = [] } = card;

  const isLiked = likes.some((user) => user._id === currentUser._id);

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onDeleteCard(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={`Foto de ${name}`}
        onClick={() => onImageClick(card)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={handleCardDelete}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}

export default Card;
