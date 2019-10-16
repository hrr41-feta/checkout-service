import React from 'react';

class Quantity extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quantitySelection: null,
      availableQuantity: 67
    };
  }

  render() {
    let quantities = [...Array(this.state.availableQuantity).keys()];
    return (
      <div className="quantityChoice">
        <label>Quantity</label><br />
        <select value={this.state.quantitySelection}>
          {quantities.map((quantity) => {
            return <option value={quantity + 1}>{quantity + 1}</option>
          })}
        </select>
      </div>
    )
  }
}

export default Quantity;
