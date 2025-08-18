import BarraDePesquisa from './components/BarraDePesquisa';
import BotaoDePerfil from './components/BotaoDePerfil';
import ProjetosSugeridos from './components/ProjetosSugeridos';
import ProjetosNovos from './components/ProjetosNovos';
import Navegação  from './components/Navegação';

function App() {
  return (
    <div>
      <BarraDePesquisa />
      <BotaoDePerfil />
      <ProjetosSugeridos nome1="Sugestão 1" nome2="Sugestão 2" nome3="Sugestão 3" />
      <ProjetosNovos nome1="Projeto novo 1" nome2="Projeto novo 2" nome3="Projeto novo 3" />
      <Navegação />
    </div>
  );
}

export default App;