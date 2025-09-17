import React from 'react';
import styles from '../components/PasswordInput.module.css';

function NameInput({ value, onChange, name }) {
    return (
        <>
            <h2>Nome:</h2>
            <input
                className={styles.PasswordInput}
                type="text"
                placeholder="Digite seu nome:"
                value={value}  // Passa o valor controlado
                onChange={onChange}  // Chama o handleChange passado pelo componente pai
                name={name}  // Passa o nome do campo para identificar o input
            />
            <br />
        </>
    );
}

export default NameInput;