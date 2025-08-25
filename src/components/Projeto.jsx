import styles from './Projetos.module.css';

function Projeto({ nome, preco }) {
    return (
        <div>
            
                <p className={styles['icone-projeto']} href="#">
                    <h2>{nome}</h2>
                    <br />
                    R${preco}
                </p>
        </div>
    );
}

export default Projeto;