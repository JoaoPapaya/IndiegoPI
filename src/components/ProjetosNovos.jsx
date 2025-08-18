import styles from './Projetos.module.css';

function ProjetosNovos({ nome1, nome2, nome3 }) {
    return (
        <div>
            <h2 className={styles.h2}>Projetos Novos</h2>
            <div className={styles.secao}>
                <a className={styles['icone-projeto']} href="#">
                    {nome1}
                </a>
                <a className={styles['icone-projeto']} href="#">
                    {nome2}
                </a>
                <a className={styles['icone-projeto']} href="#">
                    {nome3}
                </a>
            </div>
        </div>
    );
}

export default ProjetosNovos;