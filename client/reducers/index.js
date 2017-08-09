'use strict';

import { combineReducers } from "redux";
import UpdateLegalNames from "./update-legal-name";

const rootReducer = combineReducers({
  legalName: UpdateLegalNames
});

export default rootReducer;
