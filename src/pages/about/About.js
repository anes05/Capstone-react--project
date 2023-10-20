import './About.scss';

import Navbar from '../../components/navbar/Navbar';
import About from '../../components/about/About';
import Description from '../../components/description/Description';
import Testimonial from '../../components/testimonial/Testimonial';
import Footer from '../../components/footer/Footer';

const AboutPage = () => {
    return (
        <>
            <header className="header">
                <Navbar />
            </header>

            <main className="main">
                <About />
                <Description />
                <Testimonial />
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
};

export default AboutPage;
