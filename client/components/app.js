import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './styles.css'
//Importing Components
import SellerInfo from './sellerInfo.js';
import ItemName from './itemName.js';
import ItemPrice from './itemPrice.js';
import FreeShipping from './freeShipping.js';
import OnOrderAvailable from './onOrderAvailable.js';
import Badge from './badge.js';
import Personalization from './personalization.js';
import Quantity from './quantity.js';
import ProductOptionList from './productOptionList.js';
import Buttons from './buttons.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sellerName: '',
      averageReviewScore: null,
      numberReviews: null,
      itemName: '',
      badge: '',
      itemPrice: 0,
      freeShipping: false,
      productOptions: [],
      personalization: false,
      availableQuantity: null,
      onOrder: null,
      productId: null,
      personalizationChoice: '',
      quantityChoice: 0,
      productChoices: ['', '', '']
    };
    this.requestProductDetails = this.requestProductDetails.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updatePersonalizationChoice = this.updatePersonalizationChoice.bind(this);
    this.updateQuantityChoice = this.updateQuantityChoice.bind(this);
    this.updateProductChoice = this.updateProductChoice.bind(this);
  }

  async requestProductDetails(productId) {
    try {
      var response = await axios.get(`http://127.0.0.1:1234/api/checkout/${productId}/details`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  updateProductChoice(choice, choiceNumber, adjustedPrice) {
    let currentChoices = this.state.productChoices;
    currentChoices[choiceNumber] = choice;
    adjustedPrice = Number(adjustedPrice);
    this.setState({
      productChoices: currentChoices,
      itemPrice: adjustedPrice ? adjustedPrice : this.state.itemPrice
    });
  }

  updateQuantityChoice(choice) {
    this.setState({quantityChoice: Number(choice)});
  }

  updatePersonalizationChoice(choice) {
    this.setState({personalizationChoice: choice});
  }

  updateState(newData) {
    this.setState(newData);
  }

  componentDidMount() {
    this.requestProductDetails(20)
      .then(data => this.updateState(data));
  }

  render() {
    return (
      <div className={styles.app}>
        <SellerInfo
          sellerName={this.state.sellerName}
          averageScore={this.state.averageReviewScore}
          numReviews={this.state.numberReviews}
        />
        <ItemName itemName={this.state.itemName} />
        <Badge badge={this.state.badge} />
        <ItemPrice itemPrice={this.state.itemPrice} />
        <FreeShipping freeShipping={this.state.freeShipping} />
        <ProductOptionList productOptions={this.state.productOptions} updateChoice={this.updateProductChoice} />
        {this.state.personalization && <Personalization updateChoice={this.updatePersonalizationChoice}/>}
        <Quantity availableQuantity={this.state.availableQuantity} updateQuantity={this.updateQuantityChoice} />
        <Buttons />
        <OnOrderAvailable availableQuantity={this.state.availableQuantity} onOrder={this.state.onOrder} />
        <hr className={styles.borderLine} />
      </div>
    )
  }
}

export default App;
