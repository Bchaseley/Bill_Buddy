const SearchResults = ( results ) => {

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
                        let date = new Date(transaction.date_paid.toString());
                        return <div className="table-row">
                            <td className="table-data">{transaction.name}</td>
                            <td className="table-data">{transaction.amount}</td>
                            <td className="table-data">{date.toDateString()}</td>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}

export default SearchResults;