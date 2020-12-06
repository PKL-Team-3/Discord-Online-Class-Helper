import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Example from "./components/Example";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/views/home";
import { createStore } from "redux";

//Store

//Action

//Reducer

//dispacth

const Main = props => (
    <Switch>
        {/*User might LogIn*/}
        <Route exact path="/" component={Home} />
        {/*User will LogIn*/}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </Switch>
);
export default Main;
