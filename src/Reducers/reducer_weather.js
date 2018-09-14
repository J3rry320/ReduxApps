import { FETCH_WEATHER } from "../Actions";

export default function(state = null, action) {

  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data;
  }
  return state;
}