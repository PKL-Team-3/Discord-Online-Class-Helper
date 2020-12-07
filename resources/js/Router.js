import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Example from "./components/Example";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/views/home";
import { createStore } from "redux";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

//Store

//Action

//Reducer

//dispacth

const Main = props => (
    <Switch>
        {/*User might LogIn*/}
        <ProtectedRoute exact path="/" component={Home} />
        {/*User will LogIn*/}
        <GuestRoute exact path="/login" component={Login} />
        <GuestRoute exact path="/register" component={Register} />
    </Switch>
);
export default Main;
