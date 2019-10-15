import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import React from 'react';
import SellerInfo from '../client/sellerInfo.js';

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
  })
});