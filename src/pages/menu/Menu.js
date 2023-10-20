import './Menu.scss';

import Navbar from '../../components/navbar/Navbar';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';

const MenuPage = () => {
    return (
        <>
            <header className="header">
                <Navbar />
            </header>

            <main className="main">
                <Menu />
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
};

export default MenuPage;
