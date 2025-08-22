import styles from './Projetos.module.css';

function ProjetosSugeridos({ children }) {
    return (
        <div>
            <h1 className={styles.h1}>Projetos Sugeridos</h1>
            <div className={styles.sugeridosSecao}>
                {children}
            </div>
        </div>
    );
}

export default ProjetosSugeridos;