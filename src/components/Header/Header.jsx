import logo from "../../images/logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="Logo com a escrita Around the US"
        />
        <hr className="header__line" />
      </header>
    </>
  );
}

export default Header;
