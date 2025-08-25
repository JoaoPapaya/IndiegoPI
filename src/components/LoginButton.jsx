import styles from './LoginButton.module.css';

function LoginButton(props) {
    return (
        <div className={styles.LoginButton}>
        <button>{props.texto}</button>
        </div>
    )
}

export default LoginButton