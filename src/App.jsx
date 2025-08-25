import { Routes, Route, Link } from 'react-router-dom';
import Home from './Paginas/Home'; 
import Login from './Paginas/Login';
import Cadastro from './Paginas/Cadastro';
import Perfil from './Paginas/Perfil'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Início</Link> | <Link to="/login">Login</Link> | <Link to="/cadastro">Cadastro</Link> | <Link to="/perfil">Perfil</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />

      </Routes>
    </div>
  );
}

export default App;
