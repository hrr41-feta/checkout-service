import React from 'react';

class Personalization extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      personalizationData: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({personalizationData: event.target.value});
  }
  render() {
    return (
      <div className="personalization">
        <form>
          <label>Add your personalization text here</label>
          <input value={this.state.personalizationData} onChange={this.handleInputChange} />
        </form>
      </div>
    )
  }
}

export default Personalization;