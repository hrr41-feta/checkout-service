import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sellerName: '',
      averageReviewScore: null,
      numberReviews: null,
      itemName: '',
      badge: '',
      itemPrice: null,
      freeShipping: false,
      productOptions: [],
      personalization: false,
      availableQuantity: null,
      onOrder: null,
      productId: null
    };
    this.requestProductDetails = this.requestProductDetails.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  async requestProductDetails(productId) {
    try {
      var response = await axios.get(`http://127.0.0.1:1234/api/checkout/${productId}/details`);
    } catch (err) {
      console.log(err);
    }
    return response.data;
  }

  updateState(newData) {
    let newState = Object.assign({}, this.state);
    newState = Object.assign(newState, newData);
    this.setState(newState);
  }

  componentDidMount() {
    this.requestProductDetails(59)
      .then(data => this.updateState(data));
  }

  render() {
    return (
      <div>
        {this.state.itemName}
      </div>
    )
  }
}

export default App;


