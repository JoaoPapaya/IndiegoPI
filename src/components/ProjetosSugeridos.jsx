import styles from './Projetos.module.css';

function ProjetosSugeridos(props) {
    return (
        <div>
            <h2 className={styles.h2}>Projetos Sugeridos</h2>
            <div className={styles.sugeridosSecao}>
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

export default ProjetosSugeridos;