import { combineReducers } from "redux";
import { getImageReducer } from "./ImageReducer";
import { getListReducer } from "./ListReducer";
import { getRandomReducer } from "./RandomReducer";
import { getUserReducer } from './AuthReducer';

export const rootReducer = combineReducers({
  getImageReducer,
  getRandomReducer,
  getListReducer,
  getUserReducer
});
