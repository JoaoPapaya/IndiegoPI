import styles from './EmailInput.module.css'

function EmailInput() {
    return (
        <>
            <h2>Email:</h2>
            <input className={styles.Email}type="email" placeholder="Digite seu e-mail"/>
            <br />
        </>
    )
}

export default EmailInput