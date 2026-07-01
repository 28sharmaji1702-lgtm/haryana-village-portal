import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2>
            🌾 Haryana Village Portal
          </h2>

          <p>
            Digital platform for accessing Haryana village
            information and digital shajra maps.
          </p>

        </div>

        <div className="footer-right">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/admin">Admin Login</Link>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Haryana Village Portal. All Rights Reserved.
        </p>

        <p className="developer-credit">
          Designed &amp; Developed by <strong>Vishnu Patwari</strong>
        </p>

      </div>

    </footer>

  );

}

export default Footer;