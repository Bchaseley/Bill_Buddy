import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecTrans = () => {

    const [allTrans, setAllTrans] = useState([]);

    useEffect(() => {
        axios.get('/api/transactions', { withCredentials: true, })
            .then(res => {
                setAllTrans(res.data);
            });
    })

    return <div>
        <h2>Recent Transactions</h2>
        <div className="TransTable">
            <div className="table">
                <div className="table-header">
                    <div className="header__item">Paid To</div>
                    <div className="header__item">Amount</div>
                    <div className="header__item">Date Paid</div>
                </div>
                <div className="table-content">
                    {allTrans.map((trans, idx) => {
                        return <div className="table-row">
                            <td className="table-data">{trans.name}</td>
                            <td className="table-data">{trans.amount}</td>
                            <td className="table-data">{trans.datePaid}</td>
                        </div>
                    })}
                </div>
            </div>
        </div>

    </div>
}

export default RecTrans;