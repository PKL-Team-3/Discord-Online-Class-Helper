import React from "react";
import Navbar from "../layouts/Navbar";

export default function Absensi() {
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
                <div>
                    <h2>Absensi</h2>
                </div>
            )}
        </React.Fragment>
    );
}
