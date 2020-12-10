import React from "react";
import Navbar from "../layouts/Navbar";
import Posts from "../Posts/Posts";

export default function Post() {
    const role = localStorage.getItem("role");
    return (
        <React.Fragment>
            <Navbar />
            {role === "guest" ? (
                <h1 className="container mt-5 center d-flex justify-content-center text-white">
                    {" "}
                    Unauthorized
                </h1>
            ) : (
                <div className="container">
                    <Posts />
                </div>
            )}
        </React.Fragment>
    );
}
