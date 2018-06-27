import React from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const PokemonItem = ({ name, url, onDelete }) => (
    <li >
        <Link to={`/pokemon/${url.substr(url.length - 3, 2)}/${name}`}>{name}</Link>
        {onDelete && <button onClick={onDelete} >Remove from MyPokemons</button>}
    </li>
);

PokemonItem.propTypes = {
    onDelete: PropTypes.func,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default PokemonItem;
