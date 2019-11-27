import {createStore, applyMiddleware} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {reducers, AppState} from './reducers';
import {AppTypes} from './actions/types';

const store = createStore(reducers, applyMiddleware(thunk as ThunkMiddleware<AppState, AppTypes>));

export default store;
