import './Testimonial.scss';

import { testimonialData } from './testimonialData';

export default function Testimonial() {
    return (
        <div className="testimonialComponent">
            <h1 className="heading">Testimonial</h1>

            <div className="testimonialContainer">
                {testimonialData.map((data, index) => (
                    <div className="item" key={index}>
                        <img className="image" src={data.image} alt={data.name} />
                        <h3 className="name">{data.name}</h3>
                        <p className="description">{data.description}</p>
                        <p className="rating">Rating : {data.rating}/5</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
