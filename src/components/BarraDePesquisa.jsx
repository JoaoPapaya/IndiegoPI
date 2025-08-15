import styles from './BarraDePesquisa.module.css';

function BarraDePesquisa() {
  return (
    <div className={styles.container}>
      <form className={styles.formBarra} action="/buscar" method="GET">
        <input className={styles.inputCustom} type="search" name="q" placeholder="Pesquisar..." />
        <button className={styles.buttonCustom}type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default BarraDePesquisa;