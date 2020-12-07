import React from "react";
import PengumumanList from "../Pengumuman/PengumumanList";
import Navbar from "../layouts/Navbar";

export default function Pengumuman() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container mt-5">
                <PengumumanList />
            </div>
        </React.Fragment>
    );
}
