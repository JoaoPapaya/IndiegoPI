import React from 'react';
import styles from './TelaDeProduto.module.css'

const TelaDeProduto = ({ image, name, price, seller }) => {
  return (
    <div className="produto-card">
      <img src={image} alt={name} className="produto-image" />
      <h2 className="produto-name">{name}</h2>
      <p className="produto-price">Preço: R$ {price}</p>
      <p className="produto-seller">Vendido por: {seller}</p>
    </div>
  );
};

export default TelaDeProduto;