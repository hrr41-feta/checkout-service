import React from 'react';
import styles from './styles.css';

const Buttons = (props) => {
  return (
  <div className={styles.buttonContainer}>
    <button className={styles.buyItNow}>Buy it now</button>
    <br />
    <button className={styles.addToCart} >Add to cart</button>
  </div>
  );
};

export default Buttons;
