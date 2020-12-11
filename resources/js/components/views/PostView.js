import { set } from "lodash";
import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";

export default function PostView() {
    const token = localStorage.getItem("token");
    const gett = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: { Authorization: "Bearer " + token }
    });

    const [data, setData] = useState([]);

    const getPost = async () => {
        const id = window.location.href;
        const lastURLSegment = id.substr(id.lastIndexOf("/") + 1);
        console.log(lastURLSegment);
        const urlParams = new URLSearchParams(id);
        console.log(urlParams);
        const post = await gett.get(`/api/post/get/${lastURLSegment}`);
        console.log(post);
        console.log(post.data.data[0]);
        setData(post.data.data[0]);
    };
    const createMarkup = () => {
        return { __html: data.content };
    };

    useEffect(() => {
        getPost();
        return () => {};
    }, []);
    return (
        <React.Fragment>
            <Navbar />
            <div className="container mt-5">
                <img src={data.thumbnail} style={{ width: 500 }} alt="" />
                <h2 className="mt-3 text-white mb-5">Title: {data.title}</h2>
                <div
                    className="text-white"
                    dangerouslySetInnerHTML={createMarkup()}
                ></div>
            </div>
        </React.Fragment>
    );
}
