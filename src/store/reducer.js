import { combineReducers } from "redux";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";

const cReaducer = combineReducers({ recommend: recommendReducer });

export default cReaducer;
