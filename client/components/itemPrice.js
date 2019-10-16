import React from 'react';

const ItemPrice = ({itemPrice}) => {
  return (
    <div className="itemPrice">${itemPrice.toFixed(2)}</div>
  );
};

export default ItemPrice;