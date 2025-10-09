import React from 'react';
import styles from '../components/EmailInput.module.css';

function EmailInput({ value, onChange, name }) {
    return (
        <>
            <h2>Email:</h2>
            <input
                className={styles.Email}
                type="text"
                placeholder="Digite seu email:"
                value={value}  // Passa o valor controlado
                onChange={onChange}  // Chama o handleChange passado pelo componente pai
                name={name}  // Passa o nome do campo para identificar o input
            />
            <br />
        </>
    );
}

export default EmailInput;