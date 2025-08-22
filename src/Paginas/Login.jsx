import EmailInput from "../components/EmailInput"
import LoginButton from "../components/LoginButton"
import PasswordInput from "../components/PasswordInput";
function Login() { 
   return (
     <div>
      <EmailInput />
      <PasswordInput />
      <LoginButton />
     </div>
   );
 }

 export default Login;