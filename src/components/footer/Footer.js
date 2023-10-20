import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footerComponent">
            <Link className="logoContainer">
                <img src="logo.svg" className="logo" alt="Logo" />
            </Link>

            <div className="footerText">© 2023. All copyrights reserved</div>
            <div className="footerText">Privacy Policy | T&Cs</div>
        </div>
    );
};

export default Footer;
