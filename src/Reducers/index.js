import { combineReducers } from "redux";
import WeatherReducer from "./reducer_weather";
import NewsReducer from './reducer_news';
import WikiReducer from './reducer_wiki';
import ImageReducer from './reducer_image';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  news:NewsReducer,
  wiki:WikiReducer,
  image:ImageReducer
});

export default rootReducer;