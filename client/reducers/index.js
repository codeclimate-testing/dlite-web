'use strict';

import { combineReducers } from "redux";
import Names from "./reducer_names";

const rootReducer = combineReducers({
  names: Names  
});

export default rootReducer;
