import React, { useState, useEffect } from "react";
import axios from 'axios';
import { navigate } from '@reach/router';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const login = e => {
        e.preventDefault();
        axios.post('/login', { email, password }, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate("/dash");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.msg);
            });

    }


    return (
        <div>
            <form onSubmit={login}>
                <div className="form">
                    <div className="subtitle">Log in!</div>
                    <div className="input-container ic2">
                        <input id="email" className="input" type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder=" " />
                        <div className="cut cut-short"></div>
                        <label for="email" className="placeholder">Email</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="password" className="input" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder=" " />
                        <div className="cut cut-short"></div>
                        <label for="email" className="placeholder">Password</label>
                    </div>
                    <button type="text" class="submit">Submit</button>
                    <p>{errors ? errors : ""}</p>
                </div>
            </form>
        </div>
    );
};

export default Login;