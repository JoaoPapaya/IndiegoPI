import styles from './LoginButton.module.css';

function LoginButton(props) {
    return (
        <button className={styles.LoginButton}>{props.texto}</button>
    )
}

export default LoginButton