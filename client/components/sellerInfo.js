import React from 'react';

const SellerInfo = ({sellerName, averageScore, numReviews}) => {
  let reviewStars =  '';
  for (let i = 0; i < averageScore; i++) {
    reviewStars += '*';
  }
  return (
    <div className="sellerInfo">
      <span className="sellerName">{sellerName} </span>
      <span className="reviewScore">{reviewStars} </span>
      <span className="numReviews">{numReviews}</span>
    </div>
  );
};

export default SellerInfo;
