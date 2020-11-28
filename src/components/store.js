import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';
import AuthReducer from './AuthReducer';

const middleWare = [thunk];

const initialState = {};

const store = createStore(
    AuthReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))

);

export default store;