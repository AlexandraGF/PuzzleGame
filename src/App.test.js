import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
 
Enzyme.configure({ adapter: new Adapter() });

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders App Component', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();

  expect(tree).toMatchSnapshot();
})
