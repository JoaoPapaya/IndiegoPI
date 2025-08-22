import EmailInput from "../components/EmailInput"
import LoginButton from "../components/LoginButton"
import PasswordInput from "../components/PasswordInput";
import styles from '../components/LoginButton.module.css'
import styles2 from '../components/BarraDePesquisa.module.css'

function Login() {
   return (
     <div className={styles.container}>
      <EmailInput className={styles2.inputCustom}/>
      <PasswordInput />
      <LoginButton />
     </div>
   );
 }

 export default Login;