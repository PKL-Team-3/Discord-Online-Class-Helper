import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PostCreate() {
    const [value, setValue] = useState("");

    return (
        <React.Fragment>
            <Navbar />
            <div className="container">
                <div className="bg-white ">
                    <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
