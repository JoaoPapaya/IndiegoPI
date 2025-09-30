import React, { useState } from 'react';
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import LoginButton from "../components/LoginButton";
import NameInput from "../components/NameInput";
import styles from '../components/Login.module.css';

function Login() {
  const [dadosDoFormulario, setDadosDoFormulario] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  // Função para lidar com as mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosDoFormulario((prevState) => ({
      ...prevState,
      [name]: value,  // Atualiza o estado com o valor correto
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    // Sua lógica de envio do formulário permanece a mesma
    
    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario: {
            nome: dadosDoFormulario.nome,
            email: dadosDoFormulario.email,
            senha: dadosDoFormulario.senha
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar o usuário');
      }

      const novoUsuario = await response.json();
      console.log('Novo usuário criado:', novoUsuario);

      // Resetando o formulário após o envio
      setDadosDoFormulario({
        nome: '',
        email: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <img src="/indieGo-icon-branco.png" alt="logo Indiego" />
        <form onSubmit={handleSubmit}>
          {/* Passando onChange corretamente para os componentes de input */}
          <NameInput
            value={dadosDoFormulario.nome}
            onChange={handleChange}  // Aqui o onChange chama o handleChange
            name="nome"  // Nome do campo de entrada
          />
          <EmailInput
            value={dadosDoFormulario.email}
            onChange={handleChange}  // Aqui o onChange chama o handleChange
            name="email"  // Nome do campo de entrada
          />
        <PasswordInput
            value={dadosDoFormulario.senha}
            onChange={handleChange}  // Aqui o onChange chama o handleChange
            name="senha"  // Nome do campo de entrada
          />
          <LoginButton texto="Criar"/>
        </form>
      </div>
    </div>
  );
}

export default Login;
