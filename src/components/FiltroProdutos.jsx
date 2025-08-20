import { useState } from 'react';

function TermoEstado() {
    const [termo, setTermo] = useState('');
    
    return (
        <div> 
            <input value={termo} onChange={(e) => setTermo(e.target.value)} />
            <p>Procurando Por: {termo}</p>
        </div>
    )
};

export default TermoEstado;