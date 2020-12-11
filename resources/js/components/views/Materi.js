import React, { useState, useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Materis from "../Materi/Materis";

export default function Materi() {
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
                <div className="container mt-5">
                    <Materis />
                </div>
            )}
        </React.Fragment>
    );
}
