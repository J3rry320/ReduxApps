import {
    combineReducers
  } from 'redux';
  import booksReducer from "./reducer_book";
  import activeBookReducer from './reducer_active_book'
  const rootReducers = combineReducers({
    books: booksReducer,
    activeBook:activeBookReducer
  })
  export default rootReducers;