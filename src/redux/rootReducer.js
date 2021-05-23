import { combineReducers } from "redux";
import { articlesLikeReducer } from "./articlesLikeReducer";

export const rootReducer = combineReducers({
    articlesLikeState:articlesLikeReducer
})