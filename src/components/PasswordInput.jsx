import styles from '../components/PasswordInput.module.css'

function PasswordInput() {
    return (
        <>
            <h2>Senha:</h2>
            <input className={styles.PasswordInput}type="password" placeholder="Digite sua senha"/>
            <br />
        </>
    )
}

export default PasswordInput