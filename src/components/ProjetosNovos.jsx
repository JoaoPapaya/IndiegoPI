import styles from './Projetos.module.css';

function ProjetosNovos(props) {
    return (
        <div>
            <h2 className={styles.h2}>Projetos Novos</h2>
            <div className={styles.secao}>
                <a className={styles['icone-projeto']} href="#">
                    {props.nome1}
                </a>
                <a className={styles['icone-projeto']} href="#">
                    {props.nome2}
                </a>
                <a className={styles['icone-projeto']} href="#">
                    {props.nome3}
                </a>
            </div>
        </div>
    );
}

export default ProjetosNovos;