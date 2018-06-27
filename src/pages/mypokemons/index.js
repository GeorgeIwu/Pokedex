import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import './mypokemons.css';
import PokemonItem from '../../components/PokemonItem'
import { removeFromMyPokemons } from './actions'

class MyPokemons extends Component {
  render() {
    const { mypokemons, remove } = this.props
    const onRemove = index => remove({ index }) 

    return (
      <div className="App">
        <header className="App-header">
        <Link to='/'>Home</Link><img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Pokemons</h1>
        </header>
        <ul className="App-intro">
          {
            mypokemons.map(({ name, url }, index) => 
              <PokemonItem 
                key={index} 
                name={name} 
                url={url}
                onDelete={() => onRemove(index)}
                />
            )
          }
        </ul>
      </div>
    );
  }
}

const stateToProps = state => ({
  ...state.mypokemons,
  mypokemons: state.mypokemons.data
});
const dispatchToProps = dispatch => ({
  remove: params => removeFromMyPokemons(params)(dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(MyPokemons);

