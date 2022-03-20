import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTrans from "./forms/AddTrans";
import SearchTrans from "./forms/SearchTrans";
import RecTrans from "./RecTrans";
import { navigate } from '@reach/router';

const Dashboard = () => {

    const [loggedUser, setLoggedUser] = useState({});

    useEffect(() => {
        axios.get('/api/user/findLogged', { withCredentials: true })
        .then((res) =>{
            setLoggedUser(res.data);
        })
    }, []);

    const logout = () => {
        axios.post('/api/logout', {}, { withCredentials: true })
            .then(navigate('/'));
    }

    return <div>
        <div className="header">
            <p className="WelcomeHeader">Welcome back, {loggedUser.first_name}</p>
            <button className="submit" onClick={logout}>Logout</button>
        </div>
        <div className="DashDiv">
            <div className="RecentTrans">
                <RecTrans />
            </div>
            <div className="DivLine"></div>
            <div className="DashForms">
                <AddTrans />
                <SearchTrans />
            </div>
        </div>
    </div>
}

export default Dashboard;