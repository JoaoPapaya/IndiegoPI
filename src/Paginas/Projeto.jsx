import React, { useEffect, useState } from 'react';


function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch('http://localhost:3000/produtos');
        if (!response.ok) {
          throw new Error('Erro ao carregar produtos');
        }

        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    fetchProdutos();
  }, []);

  if (carregando) return <p>Carregando produtos...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div className={styles.container}>
      <h1>Lista de Produtos</h1>
      <div className={styles.grid}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <strong>R$ {produto.preco}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
