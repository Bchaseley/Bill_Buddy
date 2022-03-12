import React, { useState, useEffect } from "react";
import axios from 'axios';
import { navigate } from '@reach/router';

const AddTrans = () => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState();
    const [datePaid, setDatePaid] = useState();

    const addTrans = e => {
        e.preventDefault();
        const newTrans = { name, amount, datePaid }
        axios.post('/api/trans', newTrans)
            .then(navigate('/dash'));
    }

    return <div>
        <form onSubmit={addTrans}>
            <div className="form">
                <div className="subtitle">Add a new transaction!</div>
                <div className="input-container ic1">
                    <input id="name" className="input" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder=" " />
                    <div className="cut"></div>
                    <label for="name" className="placeholder">Name of company</label>
                </div>
                <div className="input-container ic2">
                    <input id="amount" className="input" type="text" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder=" " />
                    <div className="cut"></div>
                    <label for="amount" className="placeholder">Amount</label>
                </div>
                <div className="input-container ic2">
                    <input id="datePaid" className="input" type="date" onChange={(e) => setDatePaid(e.target.value)} value={datePaid} placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label for="datePaid" className="placeholder">Date Paid</label>
                </div>
                <button type="text" className="submit">Submit</button>
            </div>
        </form>
    </div>
}

export default AddTrans;