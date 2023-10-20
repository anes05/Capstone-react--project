import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/home/Home';
import AboutPage from './pages/about/About';
import MenuPage from './pages/menu/Menu';
import ReservationPage from './pages/reservation/Reservation';
import LoginPage from './pages/login/Login';

function App() {
    return (
        <div className="pageContent">
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/reservation" element={<ReservationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
