import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/home'
import {Provider} from 'react-redux';
import Reducers from './Reducers';
import ReduxPromise from 'redux-promise';
import {createStore,applyMiddleware} from 'redux'
const createStoreWithMiddleWare=applyMiddleware(ReduxPromise)(createStore)
class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleWare(Reducers)}>
  <Home/>
      </Provider>

    );
  }
}

export default App;
