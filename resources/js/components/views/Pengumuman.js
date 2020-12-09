import React from "react";
import PengumumanList from "../Pengumuman/PengumumanList";
import Navbar from "../layouts/Navbar";

export default function Pengumuman() {
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
                    <PengumumanList />
                </div>
            )}
        </React.Fragment>
    );
}
