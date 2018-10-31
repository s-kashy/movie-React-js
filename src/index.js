import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import thunk from "redux-thunk"
import "materialize-css/dist/css/materialize.min.css";
import mainAction from "./store/reducers/mainAction"
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import 'bootstrap/dist/css/bootstrap.min.css';
const rooReducer = combineReducers({
    movies: mainAction
})

const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;
const store = createStore(rooReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );


ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
