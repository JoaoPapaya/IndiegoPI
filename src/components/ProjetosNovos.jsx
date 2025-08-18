import { Children } from 'react';
import styles from './Projetos.module.css';

function ProjetosNovos({ children }) {
    return (
        <div>
            <h2 className={styles.h2}>Projetos Novos</h2>
            <div className={styles.secao}>
                {children}
            </div>
        </div>
    );
}

export default ProjetosNovos;