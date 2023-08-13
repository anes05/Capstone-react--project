import './Reservation.scss';

import Navbar from '../../components/navbar/Navbar';
import Reservation from '../../components/reservation/Reservation';
import Footer from '../../components/footer/Footer';

const ReservationPage = () => {
    return (
        <>
            <header className="header">
                <Navbar />
            </header>

            <main className="main">
                <Reservation />
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
};

export default ReservationPage;
