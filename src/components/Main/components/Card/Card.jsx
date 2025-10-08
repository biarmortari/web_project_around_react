import ImagePopup from "../Popup/ImagePopup/ImagePopup";
function Card(props) {
  const { name, link } = props.card;
  const { onImageClick } = props;
  const imageComponent = {
    title: null,
    children: <ImagePopup card={props.card} />,
  };
  return (
    <>
      <li className="card">
        <img
          className="card__image"
          src={link}
          alt={`Foto de ${name}`}
          onClick={() => onImageClick(imageComponent)}
        />
        <button
          aria-label="Delete card"
          className="card__delete-button"
          type="button"
        />
        <div className="card__description">
          <h2 className="card__title">{name}</h2>
          <button
            aria-label="Like card"
            type="button"
            className="card__like-button"
          />
        </div>
      </li>
    </>
  );
}

export default Card;
