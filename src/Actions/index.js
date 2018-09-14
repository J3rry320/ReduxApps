import axios from 'axios'
const API_KEY = "725c271cefbc3221ab205ee4ecaaefaa";
const API_KEY_NEWS="1192d8d426224ccba317c5f3a56980e3";
const rootWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const rootNewsURL=`https://newsapi.org/v2/everything?apiKey=${API_KEY_NEWS}`
export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(cityName) {
    const url = `${rootWeatherURL}&q=${cityName}&units=metric`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
export const FETCH_NEWS="FETCH_NEWS";
export function fetchNews(cityName){
const url=`${rootNewsURL}&q=${cityName}&sortBy=publishedAt`;
const request=axios.get(url);
return {
    type:FETCH_NEWS,
    payload:request
}
}