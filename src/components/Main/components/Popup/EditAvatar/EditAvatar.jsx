function EditAvatar() {
  return (
    <form
      class="popup__form popup__form_avatar"
      id="popup__form_avatar"
      name="popup__form_avatar"
    >
      <label for="link" class="popup__label"></label>
      <input
        type="url"
        id="avatar"
        name="avatar"
        class="popup__input"
        placeholder="Link da foto de perfil"
        required
      />
      <span id="link-error" class="popup__error"></span>

      <button
        type="submit"
        class="popup__save-button popup__save-button_avatar"
      >
        Salvar
      </button>
    </form>
  );
}

export default EditAvatar;
