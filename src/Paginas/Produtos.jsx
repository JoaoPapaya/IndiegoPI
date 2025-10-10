import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Importando o hook useNavigate
import styles from "../components/BotaoDePerfil.module.css";
import styles2 from "../components/ButtonPerfil.module.css";
import styles3 from "../components/lista.module.css";
import EditarProdutoForm from '../components/EditarProdutoForm';  // Caminho correto para arquivo na pasta 'components'

function Produtos() {
  const [produtos, setProdutos] = useState([]); // DEFINE estado para usuários
  const [carregando, setCarregando] = useState(true); // DEFINE estado de carregamento
  const navigate = useNavigate();  // Usando useNavigate para navegação

  // Função para carregar a lista de usuários
useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then(response => response.json())  // Converte a resposta em JSON
    .then(data => {
        setProdutos(data);  // Atualiza a lista de usuários
        setCarregando(false);  // Define carregando como false
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setCarregando(false);  // Também define carregando como false em caso de erro
    });
  }, []);  // O array vazio garante que o efeito seja executado apenas uma vez

if (carregando) {
    return <p>Carregando produtos...</p>;
}

const usuarioId = 10;

const handleAddToCart = async (produtoId) => {
  try {
    // 1. Verifica se o carrinho já existe para o usuário
    const carrinhoRes = await fetch(`http://localhost:3000/carrinhos?usuario_id=${usuarioId}`);
    let carrinhoData = await carrinhoRes.json();

    let carrinhoId;

    if (carrinhoData.length === 0) {
      // 2. Se não existe, cria um novo carrinho
      const novoCarrinhoRes = await fetch('http://localhost:3000/carrinhos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuario_id: usuarioId,
          quantidadeProduto: 1
        })
      });

      const novoCarrinho = await novoCarrinhoRes.json();
      carrinhoId = novoCarrinho.id;
    } else {
      carrinhoId = carrinhoData[0].id;
    }

    // 3. Adiciona o produto ao carrinho
    const response = await fetch('http://localhost:3000/carrinho_produtos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        carrinho_id: carrinhoId,
        produto_id: produtoId
      })
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar produto ao carrinho');
    }

    alert('Produto adicionado ao carrinho!');
  } catch (error) {
    console.error('Erro ao adicionar ao carrinho:', error);
    alert('Erro ao adicionar produto ao carrinho');
  }
};


  // Função para lidar com a exclusão de um usuário
const handleDelete = async (id) => {
    try {
    const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error("Falha ao excluir o produto");
    }

      // Atualiza a lista na tela removendo o item deletado
    setProdutos((prevProdutos) => prevProdutos.filter(produto => produto.id !== id));
    } catch (error) {
    console.error('Erro ao excluir produto:', error);
    }
};

  // Função para navegar até a página de edição do usuário
const handleEdit = (id) => {
    navigate(`/editar-produto/${id}`);  // Navega para a página de edição com o id do usuário
};

return (
    <div className={styles3.body}>
    <h1>Nossos produtos</h1>
    <ul>
        {produtos.map(produto => (
        <li key={produto.id}>
            {produto.nome} - {produto.descricao} - R${produto.preco} - {produto.categoria_id}
            <button onClick={() => handleEdit(produto.id)}>Editar</button>  {/* Botão de edição */}
            <button onClick={() => handleDelete(produto.id)}>Excluir</button> {/* Botão de exclusão */}
            <button onClick={() => handleAddToCart(produto.id)}>Adicionar ao Carrinho</button>
        </li>
        ))}
    </ul>
    </div>
);
}

export default Produtos;
