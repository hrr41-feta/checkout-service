const mongoose = require('mongoose');
const productDetails = require('./index.js').productDetails;

let productNames = ['Personalized Cheese Board Wedding Gift Set', 'Unpainted Dorm Room Monogram', 'I have flaws mug', 'Wedding Table Numbers', 'Funny Kitchen Towels', 'Good Vibes Only Wall Banner', 'Forest Print Wall Art Set', 'Abstract figurative painting on canvas purple red blue color light thick paint huge wall painting Jewish art interior design Chagall Dreams', 'Loss of Dog Memorial Print', 'Butterfly Watercolor Art Print', 'Painting 67" Animal STAG deer Abstract Painting on canvas', 'Painting on Wood Reclaimed Modern Wood', 'Skyrim dagger.40 cm. 16 inches. Elder Scrolls prop', 'MINIMALIST LEATHER WALLET, Personalized Slim Front Pocket Wallet', 'Hi Felicia t-shirt, graphic tee', 'Personalized Leather Keychain. Custom Leather Keychain. Monogrammed Leather Keychain. Handmade in USA. Gold and Silver Foil Available. Fob.', 'Diaper Bags- Monogrammed', 'Alpaca Survival Sock', 'Brass Fox Money Clip Steampunk Money Clip Gothic Victorian Vintage Inspired Antiqued Brass Money Clip Men\'s Accessories Men\'s Gifts', 'Skulls camera strap with pocket and embroidery option. Black & white DSLR and SLR camera strap. Unique Halloween gifts', 'BREGUET MARINE CHRONOGRAPH Armbanduhr Gold, 100% Original', 'Dansk | Jens Quistgaard Staved Teak Magazine Rack | Danish Modern', 'Nautical 50 Year Calender brass Pendant Ship Necklace', 'mid century modern Harris Strong pair of blue tile and walnut lamps with new shades FREE SHIPPING', 'Vintage metal medical stand', '1990s DIAMOND Sunglasses.....john lennon. triangle. round lens. rudeboy. retro sunglasses. black sunglasses. hippie. boho. urban. hipster.', 'Beautiful Wooden Crates Storage Box Fruit Crates Box Shabby Chic x 1', 'Set of 25 Vintage Books with Decorative or Pictorial Boards'];

let productOptions = [
  {
    optionName: 'Size',
    choices: ['extra-small', 'small', 'medium', 'large', 'extra-large']
  },
  {
    optionName: 'Material',
    choices: ['ash', 'walnut', 'ebony', 'aluminum', 'brushed steel', 'glass', 'solid titanium', 'pure gold', 'solid diamond']
  },
  {
    optionName: 'Pattern',
    choices: ['checkerboard', 'argile', 'striped-vertical', 'striped-horizontal', 'stars', 'bars', 'tie-dye']
  },
  {
    optionName: 'Font Design',
    choices: ['serif', 'comic-sans', 'typewriter', 'cursive', 'star-wars']
  }
];

class dataGenerator {
  constructor() {
    //defining valid inputs to pull fake data from
    this.sellerNames = ['Michael Flinn', 'James Dunn', 'Silin Dang', 'Cyrus Ghiassi', 'Robin Kim', 'Annah Patterson'];
    this.productNames = productNames;
    this.badges = ['Bestseller', 'Poorseller'];
    this.productOptions = productOptions;

  }

  getRandomInt(lowerLimit, upperLimit) { // returns integer between lower limit and upper limit - 1
    return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
  }

  generateProductId() {
    return this.getRandomInt(1, 10000);
  }
  generateSellerID() {
    return this.getRandomInt(1,1000);
  }
  generateSellerName() {
    let nameIdx = this.getRandomInt(0, this.sellerNames.length);
    return this.sellerNames[nameIdx];
  }
  generateAverageReviewScore(lowerLimit, upperLimit) {
    return Math.random() * (upperLimit - lowerLimit) + lowerLimit;
  }
  generateNumReviews() {
    return this.getRandomInt(0, 5001);
  }
  generateProductName() {
    let nameIdx = this.getRandomInt(0, this.productNames.length);
    return this.productNames[nameIdx];
  }
  generateBadge() {
    let badgeIdx = this.getRandomInt(0,this.badges.length);
    return this.badges[badgeIdx];
  }
  generateItemPrice(lowerLimit, upperLimit) {
    let price = Math.random() * (upperLimit - lowerLimit) + lowerLimit
    return Number(price.toFixed(2));
  }
  generateBoolean() {
    return Boolean(this.getRandomInt(0,2));
  }
  generateProductOptions() {
    let numOptions = this.getRandomInt(1,3);
  }
}