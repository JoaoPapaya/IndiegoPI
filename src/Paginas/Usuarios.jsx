import { useEffect, useState } from "react";
import styles from "../components/BotaoDePerfil.module.css";
import styles2 from "../components/ButtonPerfil.module.css";

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


    return(  
    <div>
        <h1>Nossos Usuários</h1>
        <ul>
            {usuarios.map(usuario => (
                <li key={usuario.id}>
                    {usuario.nome} - R$ {usuario.email}
                </li>
            ))}
        </ul>
    </div>
)
}
export default Usuarios;