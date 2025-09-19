import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarUsuarioForm({ onUsuarioAtualizado }) {
  const { id } = useParams();  // Obtém o id do usuário da URL
  const navigate = useNavigate();  // Usado para redirecionar após a atualização

  const [formData, setFormData] = useState({
    nome: '',
    email: ''
  });

  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`);
        const data = await response.json();
        setFormData({ nome: data.nome, email: data.email });
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        setErro("Não foi possível carregar os dados do usuário.");
      }
    };

    fetchUsuario();
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
      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario: formData })  // Envia os dados atualizados
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar o usuário');
      }

      const usuarioAtualizado = await response.json();
      
      // Chama a função `onUsuarioAtualizado` do componente pai
      if (onUsuarioAtualizado && typeof onUsuarioAtualizado === 'function') {
        onUsuarioAtualizado(usuarioAtualizado);
      } else {
        console.error('onUsuarioAtualizado não é uma função');
      }

      // Redireciona para a lista de usuários após a atualização
      navigate('/usuarios');
    } catch (error) {
      console.error("Erro:", error);
      setErro("Falha ao atualizar o usuário.");
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
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditarUsuarioForm;
