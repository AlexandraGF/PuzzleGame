import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

import FullPuzzle from './FullPuzzle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FullPuzzle image="full"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text', () => {
  const wrapper = mount(<FullPuzzle image="full"></FullPuzzle>);
  expect(wrapper.text()).toContain("Developed");
});
