import React from 'react';
import styles from './styles.css';

const FreeShipping = ({ freeShipping }) => {
  return (
    <div className={styles.freeShipping}>
      { freeShipping &&
        (
          <span>
            Free shipping to <span className={styles.freeShippingLocation}>United States</span>
          </span>
        )}
    </div>
  );
};

export default FreeShipping;
