import './App.css';
import { Router } from "@reach/router";
import { useState } from "react";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SearchResults from './components/SearchResults';



function App() {

  const [results, setResults] = useState([]);
  
  return (
    <div className="App">
      <div className='HomeHeader'>
        <h1>BillBuddy</h1>
      </div>
      <Router>
        <Home path="/" />
        <Dashboard setResults={setResults} path="/dash" />
        <SearchResults results={results} path="/search" />
      </Router>
    </div>
  );
}

export default App;
