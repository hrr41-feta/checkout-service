import React from 'react';
import ProductOption from './productOption.js';

const ProductOptionList = ({productOptions, updateChoice}) => {
  return (
    <div className="productOptions">
      {productOptions.map((option, idx) => {
        return (<ProductOption
          optionName={option.optionName}
          choices={option.choices}
          key={idx}
          optionNumber={idx}
          updateChoice={updateChoice} />
        );
      })}
    </div>
  );
};

export default ProductOptionList;
