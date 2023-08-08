import { Link } from "react-router-dom";
import Logowhite from './Assets/logo-white.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <menu className="footer">
      <div className="img-footer">
          <img className="logowhite"
            src={Logowhite}
            alt="Little Lemon logo"
          ></img>
      </div>
        <div className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
          <li>  <a to="/">Home</a></li>
          <li> <a to="/about">About</a></li>
          <li> <a to="/reservations">Reservations</a></li>
          <li> <a to="/order">Order</a></li>
          <li> <a to="/login">Login</a></li>
          </ul>
        </div>

        <div className="adress">
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(629)-243-6827</li>
              <span>info@littlelemon.com</span>
           
          </ul>
        </div>
        <div className="social-media">
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
          <li>
              Facebook
            </li>
            <li>
              Instagram
            </li> 
            <li>
              Join us!
              </li>
          </ul>
        </div>
      </menu>
    </footer>
  );
}
