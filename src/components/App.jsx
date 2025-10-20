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

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          handleUpdateUser,
          handleOpenPopup,
          handleClosePopup,
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
          {popup && (
            <Popup onClose={handleClosePopup} title={popup.title}>
              {popup.children}
            </Popup>
          )}
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
