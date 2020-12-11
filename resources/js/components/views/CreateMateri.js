import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Test.css";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

export default function PostCreate() {
    const [value, setValue] = useState("");
    const useStyles = makeStyles({
        bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)"
        },
        title: {
            fontSize: 14
        },
        pos: {
            marginBottom: 12
        },
        marginAutoContainer: {
            minHeight: 300,
            width: 425,
            backgroundColor: "gray",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center"
        },
        holder: {
            width: 188,
            height: 188
        }
    });
    const classes = useStyles();

    const history = useHistory();
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [description, setDescription] = useState("");
    const [attachment, setAttachment] = useState("");

    const handleChange = event => {
        setType(event.target.value);
    };
    const [content, setContent] = useState("");

    const token = localStorage.getItem("token");

    const gett = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: { Authorization: "Bearer " + token }
    });

    const submitHandler = e => {
        e.preventDefault();
        console.log(title, content);

        const materi = {
            title,
            type,
            description,
            attachment
        };
        gett.post("/api/materi/create", materi)
            .then(res => {
                console.log(res.data);
                history.push("/post");
            })
            .catch(err => console.log(err.response));
    };

    return (
        <React.Fragment>
            <Navbar />
            <Card
                className={classes.marginAutoContainer}
                style={{ backgroundColor: "#232931", marginTop: 35 }}
            >
                <div className="container align-self-center px-4">
                    <TextField
                        label="Title"
                        id="title"
                        name="title"
                        onChange={e => setTitle(e.target.value)}
                        style={{ width: "100%" }}
                    />
                    <br />
                    <TextField
                        label="Description"
                        id="description"
                        name="description"
                        onChange={e => setDescription(e.target.value)}
                        style={{ width: "100%" }}
                    />
                    <br />
                    <TextField
                        label="Attachment"
                        id="attachment"
                        name="attachment"
                        onChange={e => setAttachment(e.target.value)}
                        style={{ width: "100%" }}
                    />
                    <br />
                    <FormControl style={{ width: "100%" }}>
                        <InputLabel
                            id="demo-simple-select-label"
                            style={{ width: "100%" }}
                        >
                            Type
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={handleChange}
                            style={{ width: "100%" }}
                        >
                            <MenuItem value="drive">Drive</MenuItem>
                            <MenuItem value="doc">Doc</MenuItem>
                            <MenuItem value="youtube">Youtube</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        style={{ width: "100%" }}
                        onClick={submitHandler}
                        className="mt-5"
                    >
                        Create
                    </Button>
                </div>
            </Card>
            <div className="App container mt-5 text-white "></div>
            );
        </React.Fragment>
    );
}
