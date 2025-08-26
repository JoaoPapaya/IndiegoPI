import React from 'react';
import styles from './TelaDeProduto.module.css'

const TelaDeProduto = ({ image, name, price, seller }) => {
  return (

      <div className={styles.produtoCard}>
        <img src={image} alt={name} className={styles.produtoImage} />
        <h2 className={styles.produtoName}>{name}</h2>
        <p className={styles.produtoPrice}>Preço: R$ {price}</p>
        <p className={styles.produtoSeller}>Vendido por: {seller}</p>
      </div>
);
};

export default TelaDeProduto;