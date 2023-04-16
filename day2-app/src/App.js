import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Metrics from './pages/Metrics-Page';

//import LonginForm from './LoginForm';

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/metrics">Metrics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metrics" element={<Metrics />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;