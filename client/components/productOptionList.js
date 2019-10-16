import React from 'react';
import ProductOption from './productOption.js';

const ProductOptionList = ({productOptions}) => {
  return (
    <div className="productOptions">
      {productOptions.map((option, idx) => {
        return <ProductOption optionName={option.optionName} choices={option.choices} key={idx} />
      })}
    </div>
  );
};

export default ProductOptionList;