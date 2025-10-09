import React, { useState } from "react";

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([
    {
      id: 1,
      nome: "Silksong",
      preco: 70.0,
      imagem:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSIO0x0FjlhSZXfkXXevg_s7KknCi0Lc6-Mxx7nCId5igxnHt3gWV92azkZwWxapsg1YnvKapEtfmp9bgL5x7TQiRSu-11Dg5baGasyazBHtw",
      quantidade: 1,
    },
    {
      id: 2,
      nome: "Hollow Knight",
      preco: 40.0,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
      quantidade: 1,
    },
  ]);

  const removerItem = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const alterarQuantidade = (id, delta) => {
    setCarrinho(
      carrinho.map((item) =>
        item.id === id
          ? { ...item, quantidade: Math.max(1, item.quantidade + delta) }
          : item
      )
    );
  };

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Carrinho</h1>

      {carrinho.length === 0 ? (
        <p style={styles.vazio}>Seu carrinho está vazio</p>
      ) : (
        <div style={styles.lista}>
          {carrinho.map((item) => (
            <div key={item.id} style={styles.item}>
              <img src={item.imagem} alt={item.nome} style={styles.imagem} />
              <div style={styles.info}>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco.toFixed(2)}</p>
                <div style={styles.qtd}>
                  <button onClick={() => alterarQuantidade(item.id, -1)}>-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => alterarQuantidade(item.id, +1)}>+</button>
                </div>
              </div>
              <button
                onClick={() => removerItem(item.id)}
                style={styles.remover}
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}

      <div style={styles.resumo}>
        <h2>Total: R$ {total.toFixed(2)}</h2>
        <button style={styles.botaoFinalizar}>Finalizar Compra</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#2d2d2d",
    borderRadius: "16px",
    boxShadow: "0 2px 8px #2d2d2d",
    color: "#fff"
  },
  titulo: { textAlign: "center" },
  lista: { display: "flex", flexDirection: "column", gap: "20px" },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
  },
  imagem: { width: "100px", height: "100px", borderRadius: "8px" },
  info: { flex: 1, marginLeft: "16px" },
  qtd: { display: "flex", alignItems: "center", gap: "8px" },
  remover: {
    backgroundColor: "#ff4444",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  resumo: {
    textAlign: "right",
    marginTop: "20px",
  },
  botaoFinalizar: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  vazio: {
    textAlign: "center",
    padding: "40px 0",
    color: "#fff",
  },
};
