import React from 'react';

const OnOrderAvailable = ({availableQuantity, onOrder}) => {
  let popularItem = <div className="popularItem"><em>Other people want this.</em> {onOrder} people have this in their carts right now.</div>
  let limitedQuantity = <div className="limitedQuantity"><em>Almost Gone.</em> There's only {availableQuantity} left.</div>
  if (availableQuantity < 5) {
    return limitedQuantity;
  } if (onOrder >= 10) {
    return popularItem;
  } else {
    return <div></div>
  }
};

export default OnOrderAvailable;