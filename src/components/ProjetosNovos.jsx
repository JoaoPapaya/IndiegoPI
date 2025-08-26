import { Children } from 'react';
import styles from './Projetos.module.css';

function ProjetosNovos({ children }) {
    return (
        <div>
            <h1 className={styles.h1}>Projetos Novos</h1>
            <div className={styles.secao}>
                    {children}
            </div>
        </div>
    );
}

export default ProjetosNovos;