import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import './pokemon.css';
import StatsList from '../../components/StatsList'
import { getPokemon, checkIfFavourite } from './actions'
import { addToMyPokemons } from '../mypokemons/actions'

class Pokemon extends Component {
  componentDidMount() {
    const { get, location, mypokemons } = this.props
    get({ pathname: location.pathname, mypokemons })
  }

  render() {
    const { pokemon: { name, height, stats }, isFavourite, favourite } = this.props
    const addToFavourite = () => favourite({ data: this.props.pokemon })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /><Link to='/mypokemons'>My Pokemons</Link>
          <h1 className="App-title">Pokemon</h1>
        </header>
        {!isFavourite && <button className="Button-special" onClick={addToFavourite} >Add to MyPokemons</button>}
        <p className="App-intro">
          Name: { name }
        </p>
        <p className="App-intro">
          Height: { height }
        </p>
        <StatsList stats={stats}/>
      </div>
    );
  }
}

const stateToProps = (state, ownProps) => ({
  ...state.pokemon,
  pokemon: state.pokemon.data,
  mypokemons: state.mypokemons,
  isFavourite: checkIfFavourite(state, ownProps)
});
const dispatchToProps = dispatch => ({
  get: params => getPokemon(params)(dispatch),
  favourite: params => addToMyPokemons(params)(dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Pokemon);
