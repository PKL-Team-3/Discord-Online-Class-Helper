import React from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
    render() {
        const Component = this.props.component;
        const isGuru = localStorage.getItem("role");

        return isGuru === "Guru" ? <Component /> : <Redirect to="/" />;
    }
}

export default ProtectedRoute;
