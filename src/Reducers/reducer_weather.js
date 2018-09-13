import { FETCH_WEATHER } from "../Actions";

export default function(state = [], action) {
    console.log("Action Recieved",action);
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}