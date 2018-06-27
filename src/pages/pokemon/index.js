import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import './pokemon.css';
import { getPokemon } from './actions'
import { addToMyPokemons } from '../mypokemons/actions'

class Pokemon extends Component {
  componentDidMount() {
    const { get, location, mypokemons } = this.props
    get({ pathname: location.pathname, mypokemons })
  }

  render() {
    const { pokemon, favourite } = this.props
    const addToFavourite = () => favourite({ data: pokemon })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /><Link to='/mypokemons'>My Pokemons</Link>
          <h1 className="App-title">Pokemon</h1>
          <button style={{ color: 'white' }} onClick={addToFavourite} >Add to MyPokemons</button>
        </header>
        <p className="App-intro">
          Name: { pokemon.name }
        </p>
        <p className="App-intro">
          Description: { pokemon.description }
        </p>
      </div>
    );
  }
}

const stateToProps = (state, ownProps) => ({
  ...state.pokemon,
  pokemon: state.pokemon.data,
  mypokemons: state.mypokemons
});
const dispatchToProps = dispatch => ({
  get: params => getPokemon(params)(dispatch),
  favourite: params => addToMyPokemons(params)(dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Pokemon);
