import './Home.scss';

import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Menu from '../../components/menu/Menu';
import Testimonial from '../../components/testimonial/Testimonial';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <>
            <header className="header">
                <Navbar />
            </header>

            <main className="main">
                <Hero />
                <Menu menuItemNumber={3} />
                <Testimonial />
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
};

export default HomePage;
