function ImagePopup({ card }) {
  return (
    <div className="image-wrapper">
      {card && (
        <>
          <img className="modal-image" src={card.link} alt={card.name} />
          <p className="modal__caption">{card.name}</p>
        </>
      )}
    </div>
  );
}

export default ImagePopup;
