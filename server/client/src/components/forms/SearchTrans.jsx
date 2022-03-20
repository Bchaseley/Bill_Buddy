import axios from "axios";
import React, { useState } from "react";
import { navigate, Router } from "@reach/router";
import SearchResults from "../SearchResults";

const SearchTrans = () => {

    const [name, setName] = useState("");
    const [datePaid, setDatePaid] = useState();
    const [results, setResults] = useState([]);
    const [errors, setErrors] = useState("");

    const searchTrans = (e) => {
        e.preventDefault();
        if (name) {
            axios.post('/api/transactions/search', { name }, { withCredentials: true })
                .then((res) => {
                    setResults(res.data);
                    navigate('/search');
                })
                .catch((err) => {
                    console.log(err);
                    setErrors(err.response.data.msg);
                });
        } else {
            axios.post('/api/transactions/search', { datePaid }, { withCredentials: true })
                .then((res) => {
                    setResults(res.data);
                    navigate('/search');
                })
                .catch((err) => {
                    console.log(err);
                    setErrors(err.response.data.msg);
                });
        }
    }

    return <div>
        <form onSubmit={searchTrans}>
            <div className="form">
                <div className="subtitle">Search your transactions</div>
                <div className="input-container ic1">
                    <input className="input" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder=" " />
                    <div className="cut"></div>
                    <label className="placeholder">Name of company</label>
                </div>
                <div className="subtitle">Or..</div>
                <div className="input-container ic2">
                    <input className="input" type="date" onChange={(e) => setDatePaid(e.target.value)} value={datePaid} placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Date Paid</label>
                </div>
                <button type="text" className="submit">Submit</button>
            </div>
            <Router>
                <SearchResults results={results} path='/search' />
            </Router>
        </form>
    </div>
}

export default SearchTrans;