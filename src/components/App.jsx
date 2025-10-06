import avatar from "../images/Avatar.png";
import editButton from "../images/edit-button.svg";
import addButton from "../images/add-button.svg";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <main className="content">
          <div className="profile">
            <button className="profile__button-avatar">
              <div className="profile__avatar-container">
                <img
                  className="profile__avatar"
                  src={avatar}
                  alt="Foto de perfil"
                />
                <span className="profile__edit-icon"></span>
              </div>
            </button>
            <div className="profile__info">
              <div className="profile__text">
                <span className="profile__text-name">Jacques Cousteau</span>
                <span className="profile__text-description">Explorador</span>
              </div>
              <button className="profile__button-edit">
                <img
                  className="profile__button-edit-icon"
                  src={editButton}
                  alt="Botão de edição"
                />
              </button>
            </div>
            <button className="profile__button-add">
              <picture>
                <source
                  media="(max-width: 601px)"
                  srcSet="./images/add-button-mobile.svg"
                />
                <img
                  className="profile__button-add-icon"
                  srcSet={addButton}
                  alt="Botao de ediçao"
                />
              </picture>
            </button>
          </div>
          <div className="elements"></div>
          <template id="card-template">
            <div className="element">
              <img className="element__image" srcSet=" " alt=" " />
              <button className="element__trash-button" type="button">
                <img
                  className="element__trash-image"
                  srcSet="./images/trash-button.svg"
                  alt="Botão de excluir"
                />
              </button>
              <div className="element__subtitle">
                <p className="element__text"></p>
                <button className="element__like-button" type="button">
                  <img
                    className="element__like-image"
                    srcSet="./images/like-button.svg"
                    alt="Botão de curtir"
                  />
                </button>
              </div>
            </div>
          </template>
        </main>
        <footer className="footer">
          <p className="footer__text">&copy; 2025 Around The U.S.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
