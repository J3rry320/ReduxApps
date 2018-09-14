import { FETCH_NEWS } from "../Actions";
export default function (state=null,action){

    switch(action.type){
        case FETCH_NEWS:
        return action.payload.data
    }
    return state

}