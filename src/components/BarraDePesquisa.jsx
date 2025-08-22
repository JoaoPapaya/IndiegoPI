import styles from './BarraDePesquisa.module.css';
import { useState } from 'react';

function BarraDePesquisa(props) {
  const [termo, setTermo] = useState('');
  
  return (
    <div className={styles.container}>
      {/* <form className={styles.formBarra} action="/buscar" method="GET">
        <input className={styles.inputCustom} type="search" name="q" placeholder="Pesquisar..." />
        <button className={styles.buttonCustom}type="submit">Buscar</button>
      </form> */}
      <input className={styles.inputCustom} type='search' value={termo} onChange={(e) => setTermo(e.target.value)} />
      <button className={props.styles}>Procurando Por: {termo}</button>
    </div>
  );
}

export default BarraDePesquisa;