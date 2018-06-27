import React from 'react';
import ReactDOM from 'react-dom';
import PokemonView from './index';

it('renders PokemonView without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PokemonView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
