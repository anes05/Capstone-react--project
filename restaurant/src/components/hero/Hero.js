import { Link } from 'react-router-dom';

import './Hero.scss';

const Hero = () => {
    return (
        <section className="heroComponent">
            <div className="details">
                <h1 className="heroTitle">Little Lemon</h1>
                <h2 className="heroSubTitle">Chicago</h2>
                <p className="description">
                    We are a family owned Mediterranean restaurant, focused on the traditional recipes served with a
                    modern twist.
                </p>

                <Link to="/reservation" className="button">
                    Book a Table
                </Link>
            </div>

            <div className="imageContainer">
                <img src="/assets/serve.jpg" className="image" alt="Serve" />
            </div>
        </section>
    );
};

export default Hero;
