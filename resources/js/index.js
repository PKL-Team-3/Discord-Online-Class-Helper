import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import Main from "./Router";

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            // Purple and green play nicely together.
            main: "#92CBC5"
        },
        secondary: {
            // This is green.A700 as hex.
            main: "#92CBC5"
        }
    }
});

class Index extends Component {
    render() {
        return (
            <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <Route component={Main} />
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById("root"));
