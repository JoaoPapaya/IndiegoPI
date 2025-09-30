import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Importando o hook useNavigate
import styles from "../components/BotaoDePerfil.module.css";
import styles2 from "../components/ButtonPerfil.module.css";
import styles3 from "../components/lista.module.css";
import EditarUsuarioForm from '../components/EditarUsuarioForm';  // Caminho correto para arquivo na pasta 'components'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]); // DEFINE estado para usuários
  const [carregando, setCarregando] = useState(true); // DEFINE estado de carregamento
  const navigate = useNavigate();  // Usando useNavigate para navegação

  // Função para carregar a lista de usuários
useEffect(() => {
    fetch('http://localhost:3000/usuarios')
      .then(response => response.json())  // Converte a resposta em JSON
    .then(data => {
        setUsuarios(data);  // Atualiza a lista de usuários
        setCarregando(false);  // Define carregando como false
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setCarregando(false);  // Também define carregando como false em caso de erro
    });
  }, []);  // O array vazio garante que o efeito seja executado apenas uma vez

if (carregando) {
    return <p>Carregando usuários...</p>;
}

  // Função para lidar com a exclusão de um usuário
const handleDelete = async (id) => {
    try {
    const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error("Falha ao excluir o usuário");
    }

      // Atualiza a lista na tela removendo o item deletado
    setUsuarios((prevUsuarios) => prevUsuarios.filter(usuario => usuario.id !== id));
    } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    }
};

  // Função para navegar até a página de edição do usuário
const handleEdit = (id) => {
    navigate(`/editar-usuario/${id}`);  // Navega para a página de edição com o id do usuário
};

return (
    <div className={styles3.body}>
    <h1>Nossos Usuários</h1>
    <ul>
        {usuarios.map(usuario => (
        <li key={usuario.id}>
            {usuario.nome} - {usuario.email} - {usuario.senha}
            <button onClick={() => handleEdit(usuario.id)}>Editar</button>  {/* Botão de edição */}
            <button onClick={() => handleDelete(usuario.id)}>Excluir</button> {/* Botão de exclusão */}
        </li>
        ))}
    </ul>
    </div>
);
}

export default Usuarios;
