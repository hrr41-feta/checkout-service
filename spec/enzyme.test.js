import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import React from 'react';
import Component from '../client/index.jsx';

test('enzyme working', () => {
  const wrapper = Enzyme.shallow(<Component />);
});
