import axios from 'axios'
const API_KEY = "725c271cefbc3221ab205ee4ecaaefaa";
const API_KEY_NEWS="1192d8d426224ccba317c5f3a56980e3";
const rootWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const rootNewsURL=`https://newsapi.org/v2/everything?apiKey=${API_KEY_NEWS}`;
const rootWikiUrl= "https://en.wikipedia.org/w/api.php?action=query&exintro&explaintext&origin=*";
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
export const WIKI_DATA="WIKI_DATA";
export function searchWiki(bookName) {
   const request= axios
      .get(
      rootWikiUrl ,
        {
          params: {
            titles: bookName,
            exchars: 200,
            exlimit: 200,
            prop: "extracts",
            format: "json"
          }
        }
      )
      return {
          type:WIKI_DATA,
          payload:request
      }


  }
  export const GOOGLE_SEARCH="GOOGLE_SEARCH"
  export  function ImageSearch(cityName){
      const request=    axios.get("https://www.googleapis.com/customsearch/v1?", {
        params: {
            q: `${cityName} skyline`.replace(/\s/g, '+'),
            searchType: 'image',
            cx: "011398632660458645263:qplvgzzfvko",
            key: "AIzaSyDICqZ-UdNtD4n5LKjdgYwwfWJi0mFVQG0"
        }
    })
    return {
        type:GOOGLE_SEARCH,
        payload:request
    }

  }



