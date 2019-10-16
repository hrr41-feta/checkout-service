import React from 'react';

const FreeShipping = ({freeShipping}) => {
  // let shippingOffered = <div className="freeShipping">Free shipping to <span>United States</span></div>
  // let shippingNotOffered = <div className="freeShipping"></div>

  // if (freeShipping) {
  //   return shippingOffered;
  // } else {
  //   return shippingNotOffered;
  // }
  return (
    <div className="freeShipping">
      { freeShipping &&
        <span>Free shipping to <span>United States</span></span>
      }
    </div>
  );
};

export default FreeShipping;