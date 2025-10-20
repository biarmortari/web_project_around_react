import React from "react";
import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

function EditProfile() {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    const { handleUpdateUser } = currentUser;
    event.preventDefault();
    handleUpdateUser({
      name: name,
      about: description,
    });
  };

  return (
    <>
      <form
        className="popup__form popup__form_profile"
        id="popup__form_profile"
        name="popup__form_profile"
        onSubmit={handleSubmit}
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
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
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
