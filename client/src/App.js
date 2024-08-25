import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Fib from "./Fib";
import logo from './logo.svg';
import OtherPage from "./OtherPage";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
      <Routes>
        <Route exact path="/" element={<Fib/>} />
        <Route path="/otherpage" element={<OtherPage/>} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
 