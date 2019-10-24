/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './styles.css';

class ProductOption extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      optionSelection: this.props.initialDropDown,
    };
    this.handleDropDownSelection = this.handleDropDownSelection.bind(this);
  }

  async handleDropDownSelection(event) {
    await this.setState({ optionSelection: event.target.value });
    let selection = this.state.optionSelection.slice();
    selection = selection.split('$'); // isolate the choice from adjusted price if there is one.
    this.props.updateChoice(selection[0], this.props.optionNumber, selection[1]);
  }

  render() {
    return (
      <div className="productOption">
        <div className={styles.optionLabel}>
          <label className={styles.optionText}>{this.props.optionName}</label>
        </div>
        <select className={styles.optionSelect} value={this.state.optionSelection} onChange={this.handleDropDownSelection}>
          <option value={''}>Select an option</option>
          {this.props.choices.map((choice, idx) => (
            <option value={`${choice.choice} $${choice.adjustedPrice || ''}`} key={idx}>
              {`${choice.choice}  `}
              {' '}
              {choice.adjustedPrice ? `($${choice.adjustedPrice})` : ''}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ProductOption;
