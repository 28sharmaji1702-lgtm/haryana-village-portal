import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        🌾 Haryana Village Digital Shajra Portal
      </div>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;