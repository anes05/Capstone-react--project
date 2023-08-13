import { useState } from 'react';

import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={`loginComponent`}>
            <div className={`logoContainer`}>
                <img src="logo.svg" className={`logo`} alt="ClassPoint" />
            </div>

            <h1 className={`head`}>Little Lemon</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className={`form`}
            >
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Enter email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="input"
                    placeholder="Enter password"
                />

                <button type="submit" className={`button`}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
