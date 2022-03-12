import AddTrans from "./forms/AddTrans";
import SearchTrans from "./forms/SearchTrans";
import RecTrans from "./RecTrans";

const Dashboard = () => {

    return <div>
        <h1 className="WelcomeHeader">Welcome back, User</h1>
        <div className="DashDiv">
            <div className="RecentTrans">
                <RecTrans/>
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