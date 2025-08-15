import styles from './Navegação.module.css';

function Navegação() {
    return (
        <nav className={styles.Navegação}>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" />
            <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" alt="Carrinho" />
            <img src="https://cdn-icons-png.flaticon.com/512/5987/5987462.png" alt="Perfil" />
        </nav>
    );
}

export default Navegação;