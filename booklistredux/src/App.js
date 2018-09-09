import React, {
  Component
} from 'react';
import Home from './Components/home'
import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './Reducers'
class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
   <Home/>
      </Provider>

    );
  }
}

export default App;