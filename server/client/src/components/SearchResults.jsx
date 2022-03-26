import moment from 'moment';

const SearchResults = ({ results }) => {

    return <div>
        <h2>Search Results</h2>
        <div className="TransTable">
            <div className="table">
                <div className="table-header">
                    <div className="header__item">Paid To</div>
                    <div className="header__item">Amount</div>
                    <div className="header__item">Date Paid</div>
                </div>
                <div className="table-content">
                    {results.map((transaction, idx) => {
                        let date = moment.utc(transaction.date_paid);
                        return <div className="table-row">
                            <td className="table-data">{transaction.name}</td>
                            <td className="table-data">{transaction.amount}</td>
                            <td className="table-data">{date.format("MMM-DD-YYYY")}</td>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}

export default SearchResults;