import CreateUser from "./forms/CreateUser";
import Login from "./forms/Login";
const Home = () => {

    return <div className="Home">
        <div className="HomeAbout">
            <p>Bill Buddy is designed to help you keep track of all your monthly expenses in
                one organized application. Whether it is a recurring bill or a variable cost,
                like a home utility bill, you can easily access any past info.
            </p>
        </div>
        <div className="DivLine">
        </div>
        <div className="HomeForms">
            <CreateUser />
            <Login />
        </div>
    </div>
}

export default Home;