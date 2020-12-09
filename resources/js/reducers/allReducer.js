import { combineReducers } from "redux";
import isLogged from "./auth/isLogged";
import isRegistered from "./auth/isRegistered";
import Nav from "./layouts/Nav";

const allReducers = combineReducers({
    isLogged,
    isRegistered,
    Nav
});

export default allReducers;
