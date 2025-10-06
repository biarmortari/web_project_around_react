import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Header />

        <footer className="footer">
          <p className="footer__text">&copy; 2025 Around The U.S.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
