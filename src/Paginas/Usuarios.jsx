import styles from "../components/BotaoDePerfil.module.css";
import styles2 from "../components/ButtonPerfil.module.css";

function Usuarios(){
    return(<div className={styles.containerCentro}>
        <button className={styles2.ButtonCustom}>Mostrar Usuarios</button>
    </div>)
}
export default Usuarios;