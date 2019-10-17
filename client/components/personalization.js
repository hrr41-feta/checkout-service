import React from 'react';
import styles from './styles.css';

class Personalization extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      personalizationData: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleInputChange(event) {
    await this.setState({personalizationData: event.target.value});
    this.props.updateChoice(this.state.personalizationData); //updates the top level state that will be used to submit user selections
  }
  render() {
    return (
      <div className="personalization">
        <form>
          <div className={styles.optionLabel}>
            <label className={styles.optionText}>Add your personalization text here</label><br />
          </div>
          <textarea className={styles.personalization} value={this.state.personalizationData} onChange={this.handleInputChange} />
        </form>
      </div>
    )
  }
}

export default Personalization;
