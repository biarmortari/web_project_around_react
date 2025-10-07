function ImagePopup(props) {
  const { card } = props;
  return (
    <div className="image-wrapper">
      <img className="modal-image" src={card.link} alt={card.name} />
      <p className="modal__caption">{card.name}</p>
    </div>
  );
}

export default ImagePopup;
