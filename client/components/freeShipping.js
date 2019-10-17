import React from 'react';
import styles from './styles.css';

const FreeShipping = ({freeShipping}) => {
  // let shippingOffered = <div className="freeShipping">Free shipping to <span>United States</span></div>
  // let shippingNotOffered = <div className="freeShipping"></div>

  // if (freeShipping) {
  //   return shippingOffered;
  // } else {
  //   return shippingNotOffered;
  // }
  return (
    <div className={styles.freeShipping}>
      { freeShipping &&
        <span >Free shipping to <span className={styles.freeShippingLocation}>United States</span></span>
      }
    </div>
  );
};

export default FreeShipping;