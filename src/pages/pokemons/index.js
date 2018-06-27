import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import './pokemons.css';
import PokemonItem from '../../components/PokemonItem'
import { getPokemons, filterPokemons, handlePokemonsFilter } from './actions'

class Pokemons extends Component {
  componentDidMount() {
    const { get } = this.props
    get()
  }

  render() {
    const { pokemons, filterText, handleFilter } = this.props
    const handleFilterChange = event => {
      handleFilter({ filterText: event.target.value })
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /><Link to='/mypokemons'>My Pokemons</Link>
          <h1 className="App-title">POKEDEX</h1>
        </header>
        <ul className="App-intro">
        <input value={filterText} onChange={(event) => handleFilterChange(event)} style={{ borderColor: 'grey'}}/>
        {
          pokemons.map(({ name, url }, index) => <PokemonItem key={index} name={name} url={url} />)
        }
        </ul>
      </div>
    );
  }
}

const stateToProps = state => ({
  ...state.pokemons,
  pokemons: filterPokemons(state)
});
const dispatchToProps = dispatch => ({
  get: () => getPokemons()(dispatch),
  handleFilter: params => handlePokemonsFilter(params)(dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Pokemons);

