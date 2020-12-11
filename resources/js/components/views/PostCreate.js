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

export default function PostCreate() {
    const [value, setValue] = useState("");

    const history = useHistory();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const handleChange = event => {
        setCategory(event.target.value);
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

        const pengumuman = {
            title,
            category,
            content
        };
        gett.post("/api/post/create", pengumuman)
            .then(res => {
                console.log(res.data);
                history.push("/post");
            })
            .catch(err => console.log(err.response));
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className="container mt-5">
                <TextField
                    label="Title"
                    id="title"
                    name="title"
                    onChange={e => setTitle(e.target.value)}
                />
                <br />
                <FormControl style={{ minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-label">
                        Category
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        onChange={handleChange}
                    >
                        <MenuItem value="Academic">Academic</MenuItem>
                        <MenuItem value="Non Academic">Non Academic</MenuItem>
                        <MenuItem value="Etc">Etc</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="App container mt-5 text-white ">
                <h2>Content</h2>

                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setContent(editor.getData());
                        console.log(content);
                    }}
                    onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    style={{ width: "100%" }}
                    onClick={submitHandler}
                >
                    Create
                </Button>
            </div>
            );
        </React.Fragment>
    );
}
