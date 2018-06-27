import React from 'react';
import ReactDOM from 'react-dom';
import PokemonsView from './index';

it('renders PokemonsView without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PokemonsView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
