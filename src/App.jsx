import { Routes, Route, Link } from 'react-router-dom';
import Home from './Paginas/Home'; 
import Login from './Paginas/Login';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Início</Link> | <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
