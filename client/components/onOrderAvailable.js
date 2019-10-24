/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './styles.css';

const OnOrderAvailable = ({ availableQuantity, onOrder }) => {
  const popularItem = (
    <div className={styles.popularItem}>
      <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" className={styles.alertImage} />
      <span><b>Other people want this.</b> {onOrder} people have this in their carts right now.</span>
    </div>
  );
  const limitedQuantity = (
    <div className={styles.popularItem}>
      <img src="https://img.icons8.com/ios/50/000000/hourglass-sand-bottom.png" className={styles.alertImage}></img>
      <span><b>Almost Gone.</b> There's only {availableQuantity} left.</span>
    </div>
  );
  if (availableQuantity < 5) {
    return limitedQuantity;
  // eslint-disable-next-line no-else-return
  } else if (onOrder >= 10) {
    return popularItem;
  } else {
    return <div />;
  }
};

export default OnOrderAvailable;
