import styles from './Projetos.module.css';

function ProjetosSugeridos({ nome1, nome2, nome3, preco1, preco2, preco3 }) {
    return (
        <div>
            <h2 className={styles.h2}>Projetos Sugeridos</h2>
            <div className={styles.sugeridosSecao}>
                <a className={styles['icone-projeto']} href="#">
                    {nome1}
                    <br />
                    R${preco1}
                </a>
                <a className={styles['icone-projeto']} href="#">
                    {nome2}
                    <br />
                    R${preco2}
                </a>
                <a className={styles['icone-projeto']} href="#">
                    {nome3}
                    <br />
                    R${preco3}
                </a>
            </div>
        </div>
    );
}

export default ProjetosSugeridos;