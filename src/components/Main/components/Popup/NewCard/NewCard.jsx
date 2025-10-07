function NewCard() {
  return (
    <>
      <form
        className="popup__form popup__form_image"
        id="popup__form_image"
        name="popup__form_image"
      >
        <label htmlFor="name" className="popup__label"></label>
        <input
          type="text"
          id="local"
          name="local"
          className="popup__input"
          placeholder="Título"
          required
          minLength="2"
          maxLength="30"
        />
        <span id="local-error" className="popup__error"></span>

        <label htmlFor="link" className="popup__label"></label>
        <input
          type="url"
          id="link"
          name="link"
          className="popup__input"
          placeholder="Link da imagem"
          required
        />
        <span id="link-error" className="popup__error"></span>

        <button type="submit" className="popup__save-button">
          Criar
        </button>
      </form>
    </>
  );
}

export default NewCard;
