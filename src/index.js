import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { reducers as pokemon } from './pages/pokemon/actions';
import { reducers as pokemons } from './pages/pokemons/actions';
import { reducers as mypokemons } from './pages/mypokemons/actions';
import App from './pages';
// import registerServiceWorker from './registerServiceWorker';


const reducers = combineReducers({
  form,
  pokemon,
  pokemons,
  mypokemons,
});

const store = createStore(
    reducers,
    compose(applyMiddleware(thunkMiddleware))
);

// Check local storage to handle refreshes
if (window.localStorage) {
    if (!JSON.parse(window.localStorage.getItem('mypokemons'))) {
        window.localStorage.setItem('mypokemons', JSON.stringify([]))
    } 
    if (store.getState().mypokemons.data !== JSON.parse(window.localStorage.getItem('mypokemons'))) {
        store.dispatch({ type: 'SET_MY_POKEMONS', payload: JSON.parse(window.localStorage.getItem('mypokemons'))})
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
// registerServiceWorker();