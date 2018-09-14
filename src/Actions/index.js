import axios from 'axios'
const API_KEY = "725c271cefbc3221ab205ee4ecaaefaa";

const rootURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(cityName) {
    const url = `${rootURL}&q=${cityName}&units=metric`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}