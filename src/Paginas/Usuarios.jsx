import { useEffect, useState } from "react";
import styles from "../components/BotaoDePerfil.module.css";
import styles2 from "../components/ButtonPerfil.module.css";
import styles3 from "../components/lista.module.css"

function Usuarios(){
    const [usuarios, setUsuarios] = useState([]); // DEFINE estado para usuários
    const [carregando, setCarregando] = useState(true); // DEFINE estado de carregamento

    useEffect(() => {
        fetch('http://localhost:3000/usuarios')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data);
                setCarregando(false);
    })
    .catch(error => console.error('Erro ao buscar dados:', error));
    setCarregando(false);
}, []);

    if (carregando) {
        return <p>Carregando usuários...</p>;
    }

    const handleDelete = async (id) => {
        await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'DELETE'
    });
  // Atualiza a lista na tela removendo o item deletado
        setUsuarios(usuarios.filter(usuario => usuario.id !== id));
};


    return(  
    <div className={styles3.body}>
        <h1>Nossos Usuários</h1>
        <ul>
            {usuarios.map(usuario => (
                <li key={usuario.id}>
                    {usuario.nome} - {usuario.email}
                    <button onClick={() => handleDelete(usuario.id)}></button>
                </li>
            ))}
        </ul>
    </div>
)
}
export default Usuarios;