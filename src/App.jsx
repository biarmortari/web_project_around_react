import logo from "./images/logo.png";
import avatar from "./images/Avatar.png";
import editButton from "./images/edit-button.svg";
import addButton from "./images/add-button.svg";

function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <img
            className="header__logo"
            src={logo}
            alt="Logo com a escrita Around the US"
          />
          <hr className="header__line" />
        </header>
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
