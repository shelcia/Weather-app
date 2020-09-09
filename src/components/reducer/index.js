import countryReducer from "./countryReducer";
import { combineReducers } from "redux";

// const rootReducers = { countries: countryReducer };
const rootReducers = combineReducers({
  countries: countryReducer,
});

export default rootReducers;
