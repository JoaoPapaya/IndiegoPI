import styles from './BotaoDePerfil.module.css';

function BotaoDePerfil() {
    return (
       <div className={styles.containerDireita}>
  <div className={styles.BotaoDePerfil}>
    <img
  src="https://i.pinimg.com/736x/ce/40/50/ce4050f967af48a2f0700e1304d2d513.jpg"
  width={89}
  alt="FotoPerfil"
  className={styles.FotoPerfil}
/>
  </div>
</div>
    );
}

export default BotaoDePerfil;