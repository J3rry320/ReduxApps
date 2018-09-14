import { GOOGLE_SEARCH } from "../Actions";
export default function (state=null,action){
    switch(action.type){
        case GOOGLE_SEARCH:
        return action.payload.data
    }
    return state;
}
