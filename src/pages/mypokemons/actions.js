
const initialState = {
  filterText: '',
  data: []
};
  
const constants = {
  SET_MY_POKEMONS: 'SET_MY_POKEMONS',
  ADD_TO_MY_POKEMONS: 'ADD_TO_MY_POKEMONS',
  REMOVE_FROM_MY_POKEMONS: 'REMOVE_FROM_MY_POKEMONS',
};

export function addToMyPokemons({ data }) {
  return (dispatch) => {
      dispatch({ type: constants.ADD_TO_MY_POKEMONS, payload: data });
  };
}

export function removeFromMyPokemons({ index }) {
  return (dispatch) => {
      dispatch({ type: constants.REMOVE_FROM_MY_POKEMONS, payload: index });
  };
}

export const reducers = (state = initialState, { type, payload }) => {
  let mypokemons = state.data.slice();
  switch (type) {
    case constants.SET_MY_POKEMONS:
      return {
        ...state,
        data: payload
      };
    case constants.ADD_TO_MY_POKEMONS:
      mypokemons.splice(0, 0, payload);
      window.localStorage.setItem('mypokemons', JSON.stringify(mypokemons))
      return {
        ...state,
        data: mypokemons
      };
    case constants.REMOVE_FROM_MY_POKEMONS:
      mypokemons.splice(payload, 1);
      window.localStorage.setItem('mypokemons', JSON.stringify(mypokemons))
      return {
        ...state,
        data: mypokemons
      };
    default:
      return state;
  }
}