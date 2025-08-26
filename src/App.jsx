import { Routes, Route, Link } from 'react-router-dom';
import Home from './Paginas/Home'; 
import Login from './Paginas/Login';
import Cadastro from './Paginas/Cadastro';
import Perfil from './Paginas/Perfil'
import Projeto from './Paginas/Projeto'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Início</Link> | <Link to="/login">Login</Link> | <Link to="/cadastro">Cadastro</Link> | <Link to="/perfil">Perfil</Link> | <Link to="Projeto">Projeto</Link> 
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/projeto" element={<Projeto />} />
      </Routes>
    </div>
  );
}

export default App;
