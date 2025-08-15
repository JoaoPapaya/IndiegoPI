import styles from './Projetos.module.css';

function Projetos() {
    return (
        <div>
            <h2 className={styles.h2}>Projetos Novos</h2>
            <div className={styles.secao}>
                <a className={styles['icone-projeto']} href="#">
                    Projeto 1
                </a>
                <a className={styles['icone-projeto']} href="#">
                    Projeto 2
                </a>
                <a className={styles['icone-projeto']} href="#">
                    Projeto 3
                </a>
            </div>

            <h2 className={styles.h2}>Projetos Sugeridos</h2>
            <div className={styles.sugeridosSecao}>
                <a className={styles['icone-projeto']} href="#">
                    Sugerido 1
                </a>
                <a className={styles['icone-projeto']} href="#">
                    Sugerido 2
                </a>
                <a className={styles['icone-projeto']} href="#">
                    Sugerido 3
                </a>
            </div>
        </div>
    );
}

export default Projetos;