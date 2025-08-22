 import { useState } from 'react';
 
function Login() {
   const [usuarioLogado, setUsuarioLogado] = useState(null);
 
   return (
     <div>
       {usuarioLogado ? (
         <div>
           <p>Bem-vindo, {usuarioLogado.nome}!</p>
           <button onClick={() => setUsuarioLogado(null)}>Logout</button>
         </div>
       ) : (
         <div>
           <p>faça login.</p>
           <button onClick={() => setUsuarioLogado({ nome: 'Breno' })}>Login</button>
         </div>
       )}
     </div>
   );
 }

 export default Login;