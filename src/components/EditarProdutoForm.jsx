import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarProdutoForm({ onProdutoAtualizado }) {
  const { id } = useParams();  // Obtém o id do usuário da URL
  const navigate = useNavigate();  // Usado para redirecionar após a atualização

  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    categoria_id: ''
  });

  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/produtos/${id}`);
        const data = await response.json();
        setFormData({ nome: data.nome, descricao: data.descricao, preco: data.preco, categoria_id: data.categoria_id });
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
        setErro("Não foi possível carregar os dados do produto.");
      }
    };

    fetchProduto();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ produto: formData })  // Envia os dados atualizados
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar o produto');
      }

      const produtoAtualizado = await response.json();
      
      // Chama a função `onUsuarioAtualizado` do componente pai
      if (onProdutoAtualizado && typeof onProdutoAtualizado === 'function') {
        onProdutoAtualizado(produtoAtualizado);
      } else {
        console.error('onProdutoAtualizado não é uma função');
      }

      // Redireciona para a lista de usuários após a atualização
      navigate('/produtos');
    } catch (error) {
      console.error("Erro:", error);
      setErro("Falha ao atualizar o produto.");
    }
  };

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <div>
      <h2>Editando: {formData.nome}</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Nome:</label>
            <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
            />
            </div>

            <div>
            <label>Descrição:</label>
            <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                required
            />
            </div>

            <div>
            <label>Preço:</label>
            <input
                type="number"
                name="preco"
                value={formData.preco}
                onChange={handleChange}
                required
            />
            </div>

            <div>
            <label>Id da Categoria:</label>
            <input
                type="number"
                name="categoria_id"
                value={formData.categoria_id}
                onChange={handleChange}
                required
            />
            </div>

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditarProdutoForm;
