import React from 'react';

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
          <label>Add your personalization text here</label><br />
          <input value={this.state.personalizationData} onChange={this.handleInputChange} />
        </form>
      </div>
    )
  }
}

export default Personalization;