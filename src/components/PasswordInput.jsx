import React from 'react';
import styles from '../components/EmailInput.module.css';

function PasswordInput({ value, onChange, name }) {
    return (
        <>
            <h2>Senha:</h2>
            <input
                className={styles.Email}
                type="password"
                placeholder="Digite sua Senha:"
                value={value}  // Passa o valor controlado
                onChange={onChange}  // Chama o handleChange passado pelo componente pai
                name={name}  // Passa o nome do campo para identificar o input
            />
            <br />
        </>
    );
}

export default PasswordInput;