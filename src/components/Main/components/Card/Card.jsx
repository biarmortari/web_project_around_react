function Card({ card, onImageClick, onDeleteCard, onCardLike }) {
  const { name, link } = card;

  const isLiked = card.isLiked;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onDeleteCard(card);
  }

  function handleImageClick() {
    onImageClick(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={`Foto de ${name}`}
        onClick={handleImageClick}
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
