import { useState } from 'react';
 
function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
 
  return (
    <div>
      {utilizadorLogado ? (
        <div>
          <p>Bem-vindo, {utilizadorLogado.nome}!</p>
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

export default App;