import styles from './Projetos.module.css';

function Projeto({ nome, preco }) {
    return (
        <div>
                <a className={styles['icone-projeto']} href="#">
                    {nome}
                    <br />
                    R${preco}
                </a>
        </div>
    );
}

export default Projeto;