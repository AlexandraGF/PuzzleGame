import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

import PuzzleGame from './PuzzleGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PuzzleGame puzzleFolder="puzzle1"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text', () => {
  const wrapper = mount(<PuzzleGame puzzleFolder="puzzle1"></PuzzleGame>);
  expect(wrapper.text()).toContain("Puzzle Area");
});
