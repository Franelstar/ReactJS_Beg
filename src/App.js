import logo from './logo.svg';
import './App.css';
import Count from './components/count';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import About from './components/about';
import Gallery from './components/gallery';

function App() {
  return (
    <Router>
      <nav className='navbar navbar-expand-lg navbar-light bg-light m-3'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/counter" className="nav-link">Counter</Link>
          </li>
          <li className='nav-item'>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className='nav-item'>
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </li>
        </ul>
      </nav>

      <div className="m-4">
        <Routes>
          <Route path="/home" Component={Count}></Route>
          <Route path="/counter" Component={Count}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/gallery" Component={Gallery}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
