import { compose, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import moviesReducer from 'src/store/reducers/fetchMovies.reducers'

const combinedUserReducer = combineReducers({
    moviesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default configureStore({
    reducer: combinedUserReducer,
    middleware: [thunk],
    compose: composeEnhancers,
});
