import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Main from "./Router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/allReducer";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#92CBC5"
        },
        secondary: {
            main: "#212121"
        }
    }
});

class Index extends Component {
    render() {
        return (
            <ThemeProvider theme={darkTheme}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Route component={Main} />
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById("root"));
