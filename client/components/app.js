import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import styles from "./styles.css";

import SellerInfo from "./sellerInfo.js";
import ItemName from "./itemName.js";
import ItemPrice from "./itemPrice.js";
import FreeShipping from "./freeShipping.js";
import OnOrderAvailable from "./onOrderAvailable.js";
import Badge from "./badge.js";
import Personalization from "./personalization.js";
import Quantity from "./quantity.js";
import ProductOptionList from "./productOptionList.js";
import Buttons from "./buttons.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerName: "",
      averageReviewScore: null,
      numberReviews: null,
      itemName: "",
      badge: "",
      itemPrice: 0,
      freeShipping: false,
      productOptions: [],
      personalization: false,
      availableQuantity: null,
      onOrder: null,
      productId: null,
      personalizationChoice: "",
      quantityChoice: 0,
      productChoices: ["", "", ""]
    };
    this.requestProductDetails = this.requestProductDetails.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updatePersonalizationChoice = this.updatePersonalizationChoice.bind(
      this
    );
    this.updateQuantityChoice = this.updateQuantityChoice.bind(this);
    this.updateProductChoice = this.updateProductChoice.bind(this);
    this.productOptionsStateMaker = this.productOptionsStateMaker.bind(this);
    this.getSearchParameters = this.getSearchParameters.bind(this);
    this.transformToAssocArray = this.transformToAssocArray.bind(this);
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const productId = Number(searchParams.get("productId"));
    this.requestProductDetails(productId || 3).then(data =>
      this.updateState(data)
    );
  }

  updateProductChoice(choice, choiceNumber, adjustedPrice) {
    const currentChoices = this.state.productChoices;
    currentChoices[choiceNumber] = choice;
    adjustedPrice = Number(adjustedPrice);
    this.setState({
      productChoices: currentChoices,
      // eslint-disable-next-line react/no-access-state-in-setstate
      itemPrice: adjustedPrice || this.state.itemPrice
    });
  }

  updateQuantityChoice(choice) {
    this.setState({ quantityChoice: Number(choice) });
  }

  updatePersonalizationChoice(choice) {
    this.setState({ personalizationChoice: choice });
  }

  productOptionsStateMaker(data) {
    let output = [];
    let font = {
      optionName: "Font Design",
      choices: []
    };
    let pattern = {
      optionName: "Pattern",
      choices: []
    };
    let size = {
      optionName: "Size",
      choices: []
    };
    let material = {
      optionName: "Material",
      choices: []
    };

    for (var i = 0; i < data.length; i++) {
      if (font.choices.length < 1) {
        font.choices.push(data[i].fonts);
      } else {
        for (var j = 0; j < font.choices.length; j++) {
          if (!font.choices.includes(data[i].fonts)) {
            font.choices.push(data[i].fonts);
          }
        }
      }

      if (pattern.choices.length < 1) {
        pattern.choices.push(data[i].patterns);
      } else {
        for (var y = 0; y < pattern.choices.length; y++) {
          if (!pattern.choices.includes(data[i].patterns)) {
            pattern.choices.push(data[i].patterns);
          }
        }
      }

      if (size.choices.length < 1) {
        size.choices.push(data[i].sizes);
      } else {
        for (var y = 0; y < size.choices.length; y++) {
          if (!size.choices.includes(data[i].sizes)) {
            size.choices.push(data[i].sizes);
          }
        }
      }

      if (material.choices.length < 1) {
        material.choices.push(data[i].materials);
      } else {
        for (var y = 0; y < material.choices.length; y++) {
          if (!material.choices.includes(data[i].materials)) {
            material.choices.push(data[i].materials);
          }
        }
      }
    }

    font.choices.forEach((choice, i) => {
      font.choices[i] = { choice: choice };
    });
    pattern.choices.forEach((choice, i) => {
      pattern.choices[i] = { choice: choice };
    });
    size.choices.forEach((choice, i) => {
      size.choices[i] = { choice: choice };
    });
    material.choices.forEach((choice, i) => {
      material.choices[i] = { choice: choice };
    });

    if (font.choices.length > 0) {
      output.push(font);
    }
    if (pattern.choices.length > 0) {
      output.push(pattern);
    }
    if (size.choices.length > 0) {
      output.push(size);
    }
    if (material.choices.length > 0) {
      output.push(material);
    }
    return output;
  }

  updateState(newData) {
    this.setState({
      sellerName: newData[0].seller_name,
      averageReviewScore: newData[0].average_review_score,
      numberReviews: newData[0].number_reviews,
      itemName: newData[0].item_name,
      badge: newData[0].badge,
      itemPrice: newData[0].item_price,
      freeShipping: newData[0].free_shipping,
      productOptions: this.productOptionsStateMaker(newData),
      personalization: newData[0].personalization,
      availableQuantity: newData[0].available_quantity,
      onOrder: newData[0].on_order,
      productId: newData[0].product_id
    });
    if (this.state.badge === "null") {
      this.setState({
        badge: ""
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line consistent-return
  async requestProductDetails(productId) {
    let response;
    try {
      response = await axios.get(
        `http://ec2-52-15-159-32.us-east-2.compute.amazonaws.com:1234/api/checkout/${productId}`
      );
      return response.data;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  getSearchParameters() {
    let prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
  }

  transformToAssocArray(prmstr) {
    let param = {};
    let prmarr = prmstr.split("&");
    for (let i = 0; i < prmarr.length; i++) {
      let tmparr = prmarr[i].split("=");
      param[tmparr[0]] = tmparr[1];
    }
    return param;
  }

  async postProduct() {
    let params = this.getSearchParameters();
    console.log("here are the params", params);
    try {
      let response = await axios.post(
        "http://ec2-52-15-159-32.us-east-2.compute.amazonaws.com:1234/api/post",
        {
          seller_name: params.seller_name,
          average_review_score: JSON.parse(params.average_review_score),
          number_reviews: JSON.parse(params.number_reviews),
          item_name: params.item_name,
          badge: JSON.parse(params.badge),
          item_price: JSON.parse(params.item_price),
          free_shipping: JSON.parse(arams.free_shipping),
          personalization: JSON.parse(params.personalization),
          available_quantity: JSON.parse(params.available_quantity),
          on_order: JSON.parse(params.on_order),
          product_id: JSON.parse(params.product_id)
        }
      );
    } catch (err) {
      throw err;
    }
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
        <ProductOptionList
          productOptions={this.state.productOptions}
          updateChoice={this.updateProductChoice}
        />
        {this.state.personalization && (
          <Personalization updateChoice={this.updatePersonalizationChoice} />
        )}
        <Quantity
          availableQuantity={this.state.availableQuantity}
          updateQuantity={this.updateQuantityChoice}
        />
        <Buttons />
        <OnOrderAvailable
          availableQuantity={this.state.availableQuantity}
          onOrder={this.state.onOrder}
        />
        <hr className={styles.borderLine} />
      </div>
    );
  }
}

export default App;
