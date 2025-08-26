import styles from './BarraDePesquisa.module.css';
import { useState } from 'react';

function BarraDePesquisa(props) {
  const [termo, setTermo] = useState('');
  
  return (
    <div className={styles.container}>
      <input className={styles.inputCustom} type='search' value={termo} onChange={(e) => setTermo(e.target.value)} />
      <button className={props.styles}>Procurando Por: {termo}</button>
    </div>
  );
}

export default BarraDePesquisa;