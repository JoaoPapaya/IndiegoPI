import styles from './Projetos.module.css';

function ProjetosSugeridos({ children }) {
    return (
        <div>
            <h2 className={styles.h2}>Projetos Sugeridos</h2>
            <div className={styles.sugeridosSecao}>
                {children}
            </div>
        </div>
    );
}

export default ProjetosSugeridos;