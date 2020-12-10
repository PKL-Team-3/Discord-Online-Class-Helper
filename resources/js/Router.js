import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Example from "./components/Example";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/views/home";
import { createStore } from "redux";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
import GuruRoute from "./GuruRoute";
import Pengumuman from "./components/views/Pengumuman";
import Testbar from "./components/layouts/Testbar";
import Absensi from "./components/views/Absensi";
import Jadwal from "./components/views/Jadwal";
import Materi from "./components/views/Materi";
import Post from "./components/views/Post";
import PostCreate from "./components/views/PostCreate";
import Quiz from "./components/views/Quiz";
import PengumumanCreate from "./components/views/PengumumanCreate";
import Test from "./components/Test";

//Store

//Action

//Reducer

//dispacth

const Main = props => (
    <Switch>
        <ProtectedRoute exact path="/test" component={Test} />
        <ProtectedRoute exact path="/test" component={Testbar} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/absensi" component={Absensi} />
        <ProtectedRoute exact path="/jadwal" component={Jadwal} />
        <ProtectedRoute exact path="/materi" component={Materi} />
        <ProtectedRoute exact path="/post" component={Post} />
        <ProtectedRoute exact path="/post/create" component={PostCreate} />
        <ProtectedRoute exact path="/quiz" component={Quiz} />
        <ProtectedRoute exact path="/pengumuman" component={Pengumuman} />
        <GuruRoute
            exact
            path="/pengumuman/create"
            component={PengumumanCreate}
        />
        <GuestRoute exact path="/login" component={Login} />
        <GuestRoute exact path="/register" component={Register} />
    </Switch>
);
export default Main;
