import { useEffect, useState } from "react";

function Carrinho() {
    const [carrinho, setCarrinho] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    const usuarioId = 10;  // ID do usuário 10

    // Carregar os produtos do carrinho do usuário
    useEffect(() => {
        fetch(`http://localhost:3000/carrinhos?usuario_id=${usuarioId}`)
        .then((res) => res.json())
        .then(async (carrinhos) => {
            if (carrinhos.length === 0) {
            setErro("Carrinho não encontrado.");
            setCarregando(false);
            return;
            }
            
            const carrinhoId = carrinhos[0].id;  // Pega o id do carrinho do usuário
            
            // Buscar os produtos no carrinho
            const produtosRes = await fetch(`http://localhost:3000/carrinho_produtos?carrinho_id=${carrinhoId}`);
            const produtosData = await produtosRes.json();
            
            // Agora buscar os detalhes dos produtos
            const detalhesProdutos = await Promise.all(
            produtosData.map(async (produto) => {
                const produtoRes = await fetch(`http://localhost:3000/produtos/${produto.produto_id}`);
                return produtoRes.json();
            })
            );
            
            setCarrinho(detalhesProdutos);
            setCarregando(false);
        })
        .catch((err) => {
            setErro("Erro ao carregar o carrinho");
            setCarregando(false);
            console.error(err);
        });
    }, [usuarioId]);

    if (carregando) {
        return <p>Carregando carrinho...</p>;
    }

    if (erro) {
        return <p>{erro}</p>;
    }

    // Função para remover um item do carrinho
    const handleRemoveItem = async (produtoId) => {
        const carrinhoRes = await fetch(`http://localhost:3000/carrinhos?usuario_id=${usuarioId}`);
        const carrinhoData = await carrinhoRes.json();
        const carrinhoId = carrinhoData[0].id;

        const produtoNoCarrinhoRes = await fetch(`http://localhost:3000/carrinho_produtos?carrinho_id=${carrinhoId}&produto_id=${produtoId}`);
        const produtoNoCarrinhoData = await produtoNoCarrinhoRes.json();

        if (produtoNoCarrinhoData.length > 0) {
        const produtoCarrinhoId = produtoNoCarrinhoData[0].id;
        
        await fetch(`http://localhost:3000/carrinho_produtos/${produtoCarrinhoId}`, {
            method: 'DELETE',
        });

        // Atualiza a lista de carrinho após a remoção
        setCarrinho((prevCarrinho) => prevCarrinho.filter((produto) => produto.id !== produtoId));
        }
    };

    // Função para comprar (limpar o carrinho)
    const handleBuy = async () => {
        const carrinhoRes = await fetch(`http://localhost:3000/carrinhos?usuario_id=${usuarioId}`);
        const carrinhoData = await carrinhoRes.json();
        const carrinhoId = carrinhoData[0].id;

        // Deleta todos os produtos do carrinho
        const produtosNoCarrinhoRes = await fetch(`http://localhost:3000/carrinho_produtos?carrinho_id=${carrinhoId}`);
        const produtosNoCarrinhoData = await produtosNoCarrinhoRes.json();

        for (let item of produtosNoCarrinhoData) {
        await fetch(`http://localhost:3000/carrinho_produtos/${item.id}`, {
            method: 'DELETE',
        });
        }

        // Limpa o carrinho na interface
        setCarrinho([]);
        alert("Compra realizada com sucesso! Carrinho limpo.");
    };

    // Calcular o preço total
    const calcularTotal = () => {
        return carrinho.reduce((total, produto) => total + produto.preco, 0).toFixed(2);
    };

    return (
        <div>
        <h1>Carrinho de Compras</h1>
        {carrinho.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
        ) : (
            <ul>
            {carrinho.map((produto) => (
                <li key={produto.id}>
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
                <p>Preço: R${produto.preco}</p>
                <button onClick={() => handleRemoveItem(produto.id)}>Remover do carrinho</button>
                </li>
            ))}
            </ul>
        )}

        {/* Mostrar o preço total */}
        {carrinho.length > 0 && (
            <>
            <h3>Preço Total: R${calcularTotal()}</h3>
            <button onClick={handleBuy}>Comprar</button>
            </>
        )}
        </div>
    );
}

export default Carrinho;