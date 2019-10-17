import React from 'react';
import styles from './styles.css';

const SellerInfo = ({sellerName, averageScore, numReviews}) => {
  let reviewStars =  '';
  for (let i = 0; i < averageScore; i++) {
    reviewStars += '*';
  }
  return (
    <div className={styles.sellerInfo}>
      <span className={styles.sellerName} >{sellerName}  </span>
      <span className={styles.reviewScore}> {' '+ reviewStars + ' '} </span>
      <span className={styles.sellerName}>({numReviews})</span>
    </div>
  );
};

export default SellerInfo;
