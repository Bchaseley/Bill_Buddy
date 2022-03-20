import './App.css';
import { Router } from "@reach/router";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <div className='HomeHeader'>
        <h1>BillBuddy</h1>
      </div>
        <Router>
          <Home path="/"/>
          <Dashboard path="/dash"/>
        </Router>
    </div>
  );
}

export default App;
