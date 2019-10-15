import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import React from 'react';
import SellerInfo from '../client/sellerInfo.js';
import ItemName from '../client/ItemName.js';
import Badge from '../client/badge.js';
import ItemPrice from '../client/itemPrice.js';
import FreeShipping from '../client/freeShipping.js';
import OnOrderAvailable from '../client/onOrderAvailable.js';

describe('<SellerInfo />', () => {
  test('It renders a seller name based on prop', () => {
    let testComp = Enzyme.mount(<SellerInfo sellerName="Me" />);
    expect(testComp.find('.sellerName').text()).toBe('Me ');
  });
  test('It renders an average review score based on prop', () => {
    let testComp = Enzyme.mount(<SellerInfo averageScore={4} />);
    expect(testComp.find('.reviewScore').text()).toBe('4 ');
  });
  test('It renders the number of seller reviews based on prop', () => {
    let testComp = Enzyme.mount(<SellerInfo numReviews={300} />);
    expect(testComp.find('.numReviews').text()).toBe('300');
  });
});

describe('<ItemName />', () => {
  test('It renders the product name based on passed props', () => {
    let testComp = Enzyme.mount(<ItemName itemName='A big thing' />);
    expect(testComp.find('.itemName').text()).toBe('A big thing');
  });
});

describe('<Badge />', () => {
  test('It should render the badge for a product if it has one', () => {
    let testComp = Enzyme.mount(<Badge badge="Bestseller" />);
    expect(testComp.text()).toBe('Bestseller');
  });
  test('It should not render a badge if one is not present', () => {
    let testComp = Enzyme.mount(<Badge badge={null} />);
    expect(testComp.text()).toBe('');
  });
});

describe('<ItemPrice />', () => {
  test('It should render the price for a product based on passed down info', () => {
    let testComp = Enzyme.mount(<ItemPrice itemPrice={450} />);
    expect(testComp.text()).toBe('$450');
  });
});

describe('<FreeShipping />', () => {
  test('It should render a free shipping message if it is available', () => {
    let testComp = Enzyme.mount(<FreeShipping freeShipping={true} />);
    expect(testComp.text()).toBe('Free shipping to United States');
  });

  test('It should not render a free shipping message if it isn\'t available', () => {
    let testComp = Enzyme.mount(<FreeShipping freeShipping={false} />);
    expect(testComp.text()).toBe('');
  });
});

describe('<OnOrderAvailable />', () => {
  test('If the item is almost out of stock it should display a message', () => {
    let testComp = Enzyme.mount(<OnOrderAvailable availableQuantity={2} />);
    expect(testComp.text()).toBe('Almost Gone. There\'s only 2 left.');
  });
  test('If the item is being ordered a lot it should display a message', () => {
    let testComp = Enzyme.mount(<OnOrderAvailable onOrder={34} />);
    expect(testComp.text()).toBe('Other people want this. 34 people have this in their carts right now.');
  });
});

