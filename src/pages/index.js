import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PokemonView from './pokemon';
import PokemonsView from './pokemons';
import MyPokemonsView from './mypokemons';

const Page = () => (
  <Router>
    <div>
      <Route exact path={`/`} component={PokemonsView} />
      <Route exact path={`/pokemon/*`} component={PokemonView} />
      <Route exact path={`/mypokemons`} component={MyPokemonsView} />
    </div>
  </Router>
);

export default Page;
