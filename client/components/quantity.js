import React from 'react';

class Quantity extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quantitySelection: '',
    };
    this.handleDropDownSelection = this.handleDropDownSelection.bind(this);
  }

  async handleDropDownSelection(event) {
    await this.setState({quantitySelection: event.target.value});
    this.props.updateQuantity(this.state.quantitySelection);
  }

  render() {
    let quantities = [...Array(this.props.availableQuantity).keys()];
    return (
      <div className="quantityChoice">
        <label>Quantity</label><br />
        <select value={this.state.quantitySelection} onChange={this.handleDropDownSelection}>
          <option value={0}>Select a quantity</option>
          {quantities.map((quantity) => {
            return (<option
            value={quantity + 1}
            key={quantity} >
              {quantity + 1}
            </option>)
          })}
        </select>
      </div>
    )
  }
}

export default Quantity;
