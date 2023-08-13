import './About.scss';

const About = () => {
    return (
        <section className="heroComponent">
            <div className="details">
                <h1 className="heroTitle">Little Lemon</h1>
                <h2 className="heroSubTitle">Chicago</h2>
                <p className="description">
                    Welcome to "Little Lemon", where culinary artistry meets warm hospitality in an unforgettable dining
                    experience. Nestled in the heart of a charming city, our restaurant invites you to embark on a
                    journey of flavors that will tantalize your senses and leave you craving for more.
                    <br />
                    <br />
                    At Gastronomia Haven, we believe that a great meal goes beyond satisfying hunger; it's an
                    exploration of culture, tradition, and creativity. Our diverse menu is a symphony of culinary
                    influences, carefully crafted to showcase the best of local and global cuisines. From savory
                    appetizers that tease your palate to decadent desserts that provide the perfect sweet finale, every
                    dish is a masterpiece prepared by our skilled chefs.
                </p>
            </div>

            <div className="imageContainer">
                <img src="/assets/chef.jpg" className="image" alt="Serve" />
            </div>
        </section>
    );
};

export default About;
