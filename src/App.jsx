import { Routes, Route, Link } from 'react-router-dom';
import Home from './Paginas/Home'; 
import Login from './Paginas/Login';
import Cadastro from './Paginas/Cadastro';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Início</Link> | <Link to="/login">Login</Link> | <Link to="/cadastro">Cadastro</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
