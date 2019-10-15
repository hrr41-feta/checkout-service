import React from 'react';

const SellerInfo = ({sellerName, averageScore, numReviews}) => {
  return (
    <div>
      <span className="sellerName">{sellerName} </span>
      <span className="reviewScore">{averageScore} </span>
      <span className="numReviews">{numReviews}</span>
    </div>
  );
};

export default SellerInfo;