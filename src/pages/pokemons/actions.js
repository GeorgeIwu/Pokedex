// import store from 'reselect';
import api from '../../utils/api';

const initialState = {
    error: null,
    loading: false,
    filterText: '',
    data: []   
};
  
const constants = {
    LIST_FETCHED: 'LIST_FETCHED',
    LIST_NOT_FETCHED: 'LIST_NOT_FETCHED',
    LIST_FILTER: 'LIST_FILTER',
};

const testdata = [
  { 
    name: 'Wasdsit',
    url: 'https://pokeapi.co/api/v2/pokemon/15/',
  },
  { 
    name: 'owerri',
    url: 'https://pokeapi.co/api/v2/pokemon/16/',
  },
  { 
    name: 'Aba boys',
    url: 'https://pokeapi.co/api/v2/pokemon/17/',
  },
  { 
    name: 'Wait',
    url: 'https://pokeapi.co/api/v2/pokemon/18/',
  },
]
export function getPokemons() {
    return (dispatch) => {
      api.get('/pokemon', '', (data) => {
        dispatch({ type: constants.LIST_FETCHED, payload: testdata });
      }, (error) => {
        dispatch({ type: constants.LIST_NOT_FETCHED, payload: error });
      });
    };
}

export const filterPokemons = ({ pokemons: { data, filterText }}) => {
  return data.filter( ({ name }) => name.toUpperCase().includes(filterText.toUpperCase()))
}

export function handlePokemonsFilter({ filterText }) {
    return (dispatch) => {
      dispatch({ type: constants.LIST_FILTER, payload: filterText });
    };
}

export const reducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.LIST_FETCHED:
          return {
            ...state,
            data: payload
          };
        case constants.LIST_NOT_FETCHED:
          return {
            ...state,
            error: payload
          };
        case constants.LIST_FILTER:
          return {
            ...state,
            filterText: payload
          };
        default:
          return state;
      }
}