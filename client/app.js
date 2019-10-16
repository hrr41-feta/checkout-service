import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SellerInfo from './sellerInfo.js';
import ItemName from './itemName.js';
import ItemPrice from './itemPrice.js';
import FreeShipping from './freeShipping.js';
import OnOrderAvailable from './onOrderAvailable.js';
import Badge from './badge.js';
import Personalization from './personalization.js';
import Quantity from './quantity.js';

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
      productId: null,
      personalizationChoice: ''
    };
    this.requestProductDetails = this.requestProductDetails.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updatePersonalizationChoice = this.updatePersonalizationChoice.bind(this);
  }

  async requestProductDetails(productId) {
    try {
      var response = await axios.get(`http://127.0.0.1:1234/api/checkout/${productId}/details`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  updatePersonalizationChoice(choice) {
    this.setState({personalizationChoice: choice});
  }

  updateState(newData) {
    this.setState(newData);
  }

  componentDidMount() {
    this.requestProductDetails(16)
      .then(data => this.updateState(data));
  }

  render() {
    return (
      <div className="checkoutModule">
        <SellerInfo
          sellerName={this.state.sellerName}
          averageScore={this.state.averageReviewScore}
          numReviews={this.state.numberReviews}
        />
        <ItemName itemName={this.state.itemName} />
        <Badge badge={this.state.badge} />
        <ItemPrice itemPrice={this.state.itemPrice} />
        <FreeShipping freeShipping={this.state.freeShipping} />
        {this.state.personalization && <Personalization updateChoice={this.updatePersonalizationChoice}/>}
        <Quantity />
        <OnOrderAvailable availableQuantity={this.state.availableQuantity} onOrder={this.state.onOrder} />
      </div>
    )
  }
}

export default App;
