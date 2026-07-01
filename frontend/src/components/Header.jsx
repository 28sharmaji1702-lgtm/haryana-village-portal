import { Link } from "react-router-dom";
import haryanaLogo from "../assets/haryana-logo.svg";
import "../styles/Header.css";

function Header() {

    return (

        <header className="header">

            <div className="header-container">

                <Link to="/" className="logo-section">

                    <img
                        src={haryanaLogo}
                        alt="Government of Haryana"
                        className="logo"
                    />

                    <div className="logo-text">

                        <h1>Haryana Village Digital Shajra</h1>

                        <p>हर गाँव, हर परिवार, डिजिटल पहचान</p>

                    </div>

                </Link>

                <nav className="nav">

                    <Link to="/">Home</Link>

                    <Link to="/about">About</Link>

                    <Link to="/contact">Contact</Link>

                </nav>

                <Link
                    to="/admin"
                    className="admin-btn"
                >
                    Admin Login
                </Link>

            </div>

        </header>

    );

}

export default Header;