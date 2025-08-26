import EmailInput from "../components/EmailInput"
import LoginButton from "../components/LoginButton"
import PasswordInput from "../components/PasswordInput";
import styles from '../components/Login.module.css'

function Login() {
  return (
    <div>

      <div className={styles.container}>
        <img src="/indieGo-icon-branco.png" alt="logo Indiego" />
        <EmailInput />
        <PasswordInput />
        <LoginButton texto="Criar" />
      </div>
    </div>
  );
}
 export default Login;