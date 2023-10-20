import './Login.scss';

import Navbar from '../../components/navbar/Navbar';
import Login from '../../components/login/Login';
import Footer from '../../components/footer/Footer';

const LoginPage = () => {
    return (
        <>
            <header className="header">
                <Navbar />
            </header>

            <main className="main">
                <Login />
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
};

export default LoginPage;
