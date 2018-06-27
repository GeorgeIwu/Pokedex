import React from 'react';
import ReactDOM from 'react-dom';
import MyPokemonsView from './index';

it('renders MyPokemonsView without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyPokemonsView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
