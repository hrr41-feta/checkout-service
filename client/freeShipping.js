import React from 'react';

const FreeShipping = ({freeShipping}) => {
  let shippingOffered = <div className="freeShipping">Free shipping to <span>United States</span></div>
  let shippingNotOffered = <div className="freeShipping"></div>

  if (freeShipping) {
    return shippingOffered;
  } else {
    return shippingNotOffered;
  }
};

export default FreeShipping;