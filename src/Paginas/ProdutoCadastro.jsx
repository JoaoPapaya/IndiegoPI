import React, { useState } from 'react';

const CriarProduto = () => {
    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        preco: '',
        categoria_id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({
        ...produto,
        [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        // Substitua a URL abaixo pela URL correta da sua API
        const response = await fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Indica que os dados são enviados como JSON
            },
            body: JSON.stringify({
            produto: {
                nome: produto.nome,
                descricao: produto.descricao,
                preco: produto.preco,
                categoria_id: produto.categoria_id
            }
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Produto criado com sucesso!', data);

            // Reseta o formulário após o sucesso
            setProduto({
            nome: '',
            descricao: '',
            preco: '',
            categoria_id: ''
            });
        } else {
            // Lida com erros
            const errorData = await response.json();
            console.error('Erro ao criar produto:', errorData);
        }

        } catch (error) {
        console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <div>
        <h2>Criar Novo Produto</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Nome do Produto:</label>
            <input
                type="text"
                name="nome"
                value={produto.nome}
                onChange={handleChange}
                required
            />
            </div>

            <div>
            <label>Descrição do Produto:</label>
            <textarea
                name="descricao"
                value={produto.descricao}
                onChange={handleChange}
                required
            />
            </div>

            <div>
            <label>Preço do Produto:</label>
            <input
                type="number"
                name="preco"
                value={produto.preco}
                onChange={handleChange}
                required
            />
            </div>

            <div>
            <label>Id da Categoria:</label>
            <input
                type="number"
                name="categoria_id"
                value={produto.categoria_id}
                onChange={handleChange}
                required
            />
            </div>

            <button type="submit">Criar Produto</button>
        </form>
        </div>
    );
};

export default CriarProduto;
