import BarraDePesquisa from '../components/BarraDePesquisa';
import BotaoDePerfil from '../components/BotaoDePerfil';
import ProjetosSugeridos from '../components/ProjetosSugeridos';
import ProjetosNovos from '../components/ProjetosNovos';
import Navegação  from '../components/Navegação';
import Projetos from '../components/Projetos';
import { useState } from 'react'
import styles from '../components/Projetos.module.css'

function Home() {
  const [noturno, ToggleNoturno] = useState(false)

  return (
        <div className={noturno ? 'dark' : 'light'}>
      <button className={noturno ? 'buttonDark' : 'buttonLight'} onClick={() => ToggleNoturno(!noturno)}>Alternar modo</button>
      <BarraDePesquisa styles={noturno ? 'buttonDark' : 'buttonLight'}/>
      <BotaoDePerfil />
      <ProjetosSugeridos>
        <h2 className={styles.h2}><Projetos nome="Sugerido 1" preco={12.99}/></h2>
        <h2 className={styles.h2}><Projetos nome="Sugerido 2" preco={20.00}/></h2>
        <h2 className={styles.h2}><Projetos nome="Sugerido 3" preco={69.99}/></h2>
      </ProjetosSugeridos>
      <ProjetosNovos>
      <h2 className={styles.h2}><Projetos nome="Projeto novo 1" preco={50.00}/></h2>
      <h2 className={styles.h2}><Projetos nome="Projeto novo 2" preco={15.99}/></h2>
      <h2 className={styles.h2}><Projetos nome="Projeto novo 3" preco={10.50}/></h2>
      </ProjetosNovos>
      <Navegação />
    </div>
 
  );
}

export default Home;