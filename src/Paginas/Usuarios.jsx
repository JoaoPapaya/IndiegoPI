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


    return(<div className={styles.containerCentro}>
        <button className={styles2.ButtonCustom}>Mostrar Usuarios</button>
    </div>)
}
export default Usuarios;