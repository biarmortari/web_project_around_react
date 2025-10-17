import React from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

function Card({ card, onImageClick, onDeleteCard, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { name, link, likes = [] } = card;

  const isLiked = likes.some((userId) => userId === currentUser._id);

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

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
        onClick={() => onDeleteCard(card)}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => onCardLike(card)}
        ></button>
      </div>
    </li>
  );
}

export default Card;
