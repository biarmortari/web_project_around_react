import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

function EditAvatar() {
  const avatarRef = useRef(null);
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <form
      className="popup__form popup__form_avatar"
      id="popup__form_avatar"
      name="popup__form_avatar"
      onSubmit={handleSubmit}
    >
      <label htmlFor="link" className="popup__label"></label>
      <input
        type="url"
        id="avatar"
        name="avatar"
        className="popup__input"
        placeholder="Link da foto de perfil"
        ref={avatarRef}
      />
      <span id="link-error" className="popup__error"></span>

      <button
        type="submit"
        className="popup__save-button popup__save-button_avatar"
      >
        Salvar
      </button>
    </form>
  );
}

export default EditAvatar;
