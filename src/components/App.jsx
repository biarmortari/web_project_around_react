import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Popup from "../components/Main/components/Popup/Popup";
import api from "../utils/api";
import "../contexts/CurrentUserContext";
import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await api.getUserInfo();
        setCurrentUser(userData);
      } catch (err) {
        console.log("Erro ao buscar dados do usuário:", err);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateUser = async (data) => {
    try {
      const newData = await api.updateUserInfo(data);
      setCurrentUser(newData);
      handleClosePopup();
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const handleUpdateAvatar = async (data) => {
    try {
      const newData = await api.updateAvatar(data);
      setCurrentUser(newData);
      handleClosePopup();
    } catch (error) {
      console.error("Erro ao atualizar avatar:", error);
    }
  };

  useEffect(() => {
    api.getAppInfo().then(([cards]) => {
      setCards(cards);
    });
  }, []);

  async function handleCardLike(card) {
    try {
      const newCard = await api.updateLike(card._id, !card.isLiked);

      setCards((prevCards) =>
        prevCards.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddPlaceSubmit(newCardData) {
    console.log(newCardData);
    try {
      const newCard = await api.addCard(newCardData);
      setCards((prev) => [newCard, ...prev]);
      handleClosePopup();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          handleUpdateUser,
          handleUpdateAvatar,
          handleOpenPopup,
          handleClosePopup,
          cards,
          handleCardLike,
          handleCardDelete,
          handleAddPlaceSubmit,
          popup,
        }}
      >
        <div className="page">
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
