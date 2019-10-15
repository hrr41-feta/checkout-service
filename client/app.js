import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SellerInfo from './sellerInfo.js';
import ItemName from './itemName.js';
import ItemPrice from './itemPrice.js';
import FreeShipping from './freeShipping.js';

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
    this.requestProductDetails(56)
      .then(data => this.updateState(data));
  }

  render() {
    return (
      <div>
        <SellerInfo
          sellerName={this.state.sellerName}
          averageScore={this.state.averageReviewScore}
          numReviews={this.state.numberReviews}
        />
        <ItemName itemName={this.state.itemName} />
        <ItemPrice itemPrice={this.state.itemPrice} />
        <FreeShipping freeShipping={this.state.freeShipping} />
      </div>
    )
  }
}

export default App;


