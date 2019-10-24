/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './styles.css';

class Quantity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantitySelection: '',
    };
    this.handleDropDownSelection = this.handleDropDownSelection.bind(this);
  }

  async handleDropDownSelection(event) {
    await this.setState({ quantitySelection: event.target.value });
    this.props.updateQuantity(this.state.quantitySelection);
  }

  render() {
    const quantities = [...Array(this.props.availableQuantity).keys()];
    return (
      <div className="quantityChoice">
        <div className={styles.optionLabel}>
          <label className={styles.optionText}>Quantity</label>
          <br />
        </div>
        <select className={styles.optionSelect} value={this.state.quantitySelection} onChange={this.handleDropDownSelection}>
          <option value={0}>Select a quantity</option>
          {quantities.map((quantity) => (
            <option
              value={quantity + 1}
              key={quantity}
            >
              {quantity + 1}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Quantity;
