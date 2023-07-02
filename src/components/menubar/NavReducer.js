import {
    LANGUAGE
} from "./constant";
import { fromJS } from "immutable";
const initialState = fromJS({
    isLoading : false,
});
export const navReducer = (state = initialState, action)=>{
    console.log("reducer allpublicdata : " , action.publicLanguage);
    switch (action.type) {
      case LANGUAGE:
      return state.set("publicLanguage", action.publicLanguage);
      default:
        return state;
    }
}