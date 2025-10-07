function EditProfile() {
  return (
    <>
      <form
        class="popup__form popup__form_profile"
        id="popup__form_profile"
        name="popup__form_profile"
      >
        <label for="name" class="popup__label"></label>
        <input
          type="text"
          id="name"
          name="name"
          class="popup__input"
          placeholder="Nome"
          required
          minlength="2"
          maxlength="40"
        />
        <span id="name-error" class="popup__error"></span>

        <label for="about" class="popup__label"></label>
        <input
          type="text"
          id="about"
          name="about"
          class="popup__input"
          placeholder="Sobre mim"
          required
          minlength="2"
          maxlength="200"
        />
        <span id="about-error" class="popup__error"></span>

        <button type="submit" class="popup__save-button">
          Salvar
        </button>
      </form>
    </>
  );
}

export default EditProfile;
