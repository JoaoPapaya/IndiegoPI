import EmailInput from "../components/EmailInput"
import LoginButton from "../components/LoginButton"
import PasswordInput from "../components/PasswordInput";
import styles from '../components/LoginButton.module.css'
import styles2 from '../components/BarraDePesquisa.module.css'
import Button from "../components/Button";

function Login() {
   return (
     <div className={styles.container}>
      <button texto='teste'/>
      <EmailInput className={styles2.inputCustom}/>
      <PasswordInput />
      <LoginButton texto='teste'/>
     </div>
   );
 }

 export default Login;