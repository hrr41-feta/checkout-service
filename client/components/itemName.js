import React from 'react';
import styles from './styles.css';

const ItemName = ({itemName}) => {
  return (
    <div className={styles.itemName} >{itemName}</div>
  );
};

export default ItemName;