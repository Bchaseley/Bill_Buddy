import React, { useState } from "react";
import axios from 'axios';
import { navigate } from '@reach/router';

const CreateUser = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const addUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password }
        axios.post('/register', newUser)
            .then((res) => {
                navigate('/dash')
            }).catch((err) => {
                console.log(err);
                setErrors(err.response.data.msg);
            });
    }

    return <div>
        <form onSubmit={addUser}>
            <div className="form">
                <div className="subtitle">Create an account!</div>
                <div className="input-container ic1">
                    <input className="input" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder=" " />
                    <div className="cut"></div>
                    <label className="placeholder">First name</label>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder=" " />
                    <div className="cut"></div>
                    <label className="placeholder">Last name</label>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Email</label>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Password</label>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Confirm Password</label>
                </div>
                <button type="text" className="submit">Submit</button>
                <p>{errors ? errors : ""}</p>
            </div>
        </form>
    </div>
}

export default CreateUser;