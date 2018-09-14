import { WIKI_DATA } from "../Actions";
export default function(state=null,action){
    switch(action.type){
        case WIKI_DATA:
        return action.payload.data
    }
    return state
}