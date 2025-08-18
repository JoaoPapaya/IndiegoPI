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
      <ProjetosSugeridos nome1="Sugestão 1" nome2="Sugestão 2" nome3="Sugestão 3" preco1={20.00} preco2={35.90} preco3={0.00} />
      <ProjetosNovos nome1="Projeto novo 1" nome2="Projeto novo 2" nome3="Projeto novo 3" preco1={12.00} preco2={69.99} preco3={80.50} />
      <Navegação />
    </div>
  );
}

export default App;