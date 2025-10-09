import { Routes, Route, Link } from 'react-router-dom';
import Home from './Paginas/Home'; 
import Login from './Paginas/Login';
import Produto from './Paginas/Produto';
import Cadastro from './Paginas/Cadastro';
import Perfil from './Paginas/Perfil';
import Projeto from './Paginas/Projeto';
import Usuarios from './Paginas/Usuarios';
import Carrinho from './Paginas/Carrinho';

import EditarUsuarioForm from './components/EditarUsuarioForm'; // Importando o componente de edição de usuário

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Início</Link> | <Link to="/login">Login</Link> | <Link to="/cadastro">Cadastro</Link> | <Link to="/perfil">Perfil</Link> | <Link to="/produto">Produto</Link> | <Link to="/usuarios">Usuarios</Link> | <Link to="/carrinho">Carrinho</Link> |
        <Link to="/usuarios">Usuarios</Link> | <Link to="/projeto">Criar Projeto</Link> 
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/projeto" element={<Projeto />} />
        <Route path="/usuarios" element={<Usuarios />} />
         <Route path="/carrinho" element={<Carrinho />} />
         <Route path="/projeto" element={<Carrinho />} />

        <Route path="/editar-usuario/:id" element={<EditarUsuarioForm />} /> {/* Adicionando a rota de edição */}
      </Routes>
    </div>
  );
}

export default App;
