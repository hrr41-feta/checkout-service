import React from 'react';
import styles from './styles.css';
import StarRatingComponent from 'react-star-rating-component';

const SellerInfo = ({sellerName, averageScore, numReviews}) => {
  let reviewStars =  '';
  for (let i = 0; i < averageScore; i++) {
    reviewStars += '*';
  }
  return (
    <div className={styles.sellerInfo}>
      <span className={styles.sellerName} >{sellerName}  </span>
      <span className={styles.reviewScore}> <StarRatingComponent
          name='starRating'
          starCount={5}
          value={averageScore}
          starColor={`#000000`}
          emptyStarColor={'#CDC7C4'}
          editing={false}
        />
      </span>
      <span className={styles.sellerName}>({numReviews})</span>
    </div>
  );
};

export default SellerInfo;
