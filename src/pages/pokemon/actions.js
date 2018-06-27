import api from '../../utils/api';

const initialState = {
    error: null,
    loading: false,
    data: {}
};
  
const constants = {
    POKEMON_FETCHED: 'POKEMON_FETCHED',
    POKEMON_NOT_FETCHED: 'POKEMON_NOT_FETCHED',
};

const testdata = { 
  name: 'Wasdsit',
  description: 'Lets N',
  stats: 'rrr',
  moves: 'here',
  url: 'https://pokeapi.co/api/v2/pokemon/15/',
}
export function getPokemon({ pathname, mypokemons }) {
  const url = pathname.split('/').splice(0, 3).join('/')
  const currentName =  pathname.split('/').pop()
  const mypokemon = mypokemons.data.filter(({ name }) => name.toString() === currentName.toString())[0]
  return (dispatch) => {
    if (mypokemon) {
      dispatch({ type: constants.POKEMON_FETCHED, payload: mypokemon });
    } else {
      api.get(url, '', (data) => {
        dispatch({ type: constants.POKEMON_FETCHED, payload: testdata });
      }, (error) => {
        dispatch({ type: constants.POKEMON_NOT_FETCHED, payload: error });
      });
    }
  }
}

export const reducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.POKEMON_FETCHED:
          return {
            ...state,
            data: payload
          };
        case constants.POKEMON_NOT_FETCHED:
          return {
            ...state,
            error: payload
          };
        default:
          return state;
    }
}