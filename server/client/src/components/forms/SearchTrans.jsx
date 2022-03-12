import axios from "axios";
import React, { useState } from "react";

const SearchTrans = () => {

    const [name, setName] = useState("");
    const [datePaid, setDatePaid] = useState();

    const searchTrans = (e) => {
        e.preventDefault();
        axios.get("/api/search")
    }

    return <div>
        <form onSubmit={searchTrans}>
            <div className="form">
                <div className="subtitle">Search your transactions</div>
                <div className="input-container ic1">
                    <input id="name" className="input" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder=" " />
                    <div className="cut"></div>
                    <label for="name" className="placeholder">Name of company</label>
                </div>
                <div className="subtitle">Or..</div>
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

export default SearchTrans;