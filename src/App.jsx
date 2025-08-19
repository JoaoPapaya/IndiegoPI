import BarraDePesquisa from './components/BarraDePesquisa';
import BotaoDePerfil from './components/BotaoDePerfil';
import ProjetosSugeridos from './components/ProjetosSugeridos';
import ProjetosNovos from './components/ProjetosNovos';
import Navegação  from './components/Navegação';
import Projeto from './components/Projeto';

function App() {
  return (
    <div>
      <BarraDePesquisa />
      <BotaoDePerfil />
      <ProjetosSugeridos>
        BUNDA
        <Projeto nome="Sugerido 1" preco={12.99}/>
        <Projeto nome="Sugerido 2" preco={20.00}/>
        <Projeto nome="Sugerido 3" preco={69.99}/>
      </ProjetosSugeridos>
      <ProjetosNovos>
        <Projeto nome="Projeto novo 1" preco={50.00}/>
        <Projeto nome="Projeto novo 2" preco={15.99}/>
        <Projeto nome="Projeto novo 3" preco={10.50}/>
      </ProjetosNovos>
      <Navegação />
    </div>
  );
}

export default App;