function EditProfile() {
  return (
    <>
      <form
        className="popup__form popup__form_profile"
        id="popup__form_profile"
        name="popup__form_profile"
      >
        <label htmlFor="name" className="popup__label"></label>
        <input
          type="text"
          id="name"
          name="name"
          className="popup__input"
          placeholder="Nome"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="name-error" className="popup__error"></span>

        <label htmlFor="about" className="popup__label"></label>
        <input
          type="text"
          id="about"
          name="about"
          className="popup__input"
          placeholder="Sobre mim"
          required
          minLength="2"
          maxLength="200"
        />
        <span id="about-error" className="popup__error"></span>

        <button type="submit" className="popup__save-button">
          Salvar
        </button>
      </form>
    </>
  );
}

export default EditProfile;
