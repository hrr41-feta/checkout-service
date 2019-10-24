/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './styles.css';

const ItemPrice = ({ itemPrice }) => {
  return (
    <div className={styles.itemPrice}>${itemPrice.toFixed(2)}</div>
  );
};

export default ItemPrice;