import styles from "../components/BotaoDePerfil.module.css";
import styles2 from "../components/ButtonCustom.module.css";

function Perfil(){
    
    return(
    <>
        <div className={styles.containerCentro}>
            <img src="https://i.pinimg.com/736x/ce/40/50/ce4050f967af48a2f0700e1304d2d513.jpg" width={300} className={styles.FotoPaginaPerfil}/>
        </div>
        <div className={styles.containerCentro}>
            <button className={styles2.ButtonCustom}>teste</button>
        </div>
        <div className={styles.containerCentro}>
            <button className={styles2.ButtonCustom}>teste</button>
        </div>
        <div className={styles.containerCentro}>
            <button className={styles2.ButtonCustom}>teste</button>
        </div>                
    </>
)
}

export default Perfil;