import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import React from 'react';
import Component from '../client/index.js';

test('enzyme working', () => {
  const wrapper = Enzyme.shallow(<Component />);
  //console.log(wrapper.text());
  expect(wrapper.find('.userInputTest')).toBeDefined();
});
