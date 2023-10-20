import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbarComponent">
            <Link className="logoContainer">
                <img src="logo.svg" className="logo" alt="Logo" />
            </Link>

            <div className="linkContainer">
                <Link to="/" className="link">
                    Home
                </Link>
                <Link to="/about" className="link">
                    About
                </Link>
                <Link to="/menu" className="link">
                    Menu
                </Link>
                <Link to="/reservation" className="link">
                    Reservation
                </Link>
                <Link to="/login" className="link">
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
