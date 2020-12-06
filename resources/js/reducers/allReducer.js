import { combineReducers } from "redux";
import isLogged from "./auth/isLogged";
import isRegistered from "./auth/isRegistered";

const allReducers = combineReducers({
    isLogged,
    isRegistered
});

export default allReducers;
