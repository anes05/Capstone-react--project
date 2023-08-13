import { useState } from 'react';

import './Reservation.scss';

const Reservation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [seats, setSeats] = useState('');
    const [date, setDate] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && seats && date) {
            setIsSuccessful(true);
            return alert('Reservation successful!');
        } else {
            setIsSuccessful(false);
            return alert('Please fill in all fields!');
        }
    };

    return (
        <div className={`reservationComponent`}>
            <div className={`logoContainer`}>
                <img src="logo.svg" className={`logo`} alt="ClassPoint" />
            </div>

            <h1 className={`head`}>Table Reservation</h1>

            {isSuccessful ? (
                <p className="successText">
                    Reservation successful of {name} for {seats} tables on {date}..! <br /> We will contact you soon!
                </p>
            ) : (
                <form onSubmit={(e) => handleSubmit(e)} className={`form`}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Enter name"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Enter email"
                    />
                    <input
                        value={seats}
                        onChange={(e) => setSeats(e.target.value)}
                        type="number"
                        className="input"
                        placeholder="Enter seat quantity"
                    />
                    <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="datetime-local"
                        className="input"
                        placeholder="Enter date"
                    />

                    <button type="submit" className={`button`}>
                        Book Now
                    </button>
                </form>
            )}
        </div>
    );
};

export default Reservation;
