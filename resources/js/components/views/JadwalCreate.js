import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Test.css";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { TimePicker } from "@material-ui/pickers";

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";

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
            height: 200
        }
    });
    const classes = useStyles();

    const [tanggal, setTanggal] = useState(new Date());

    const [jam, setJam] = useState(new Date());

    const [idk, setIdk] = useState(new Date());

    const handleDateChange = date => {
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();

        if (dd < 10) {
            dd = "0" + dd;
        }

        if (mm < 10) {
            mm = "0" + mm;
        }
        const tanggal = yyyy + "-" + mm + "-" + dd;
        console.log(tanggal);
        setIdk(date);
        setTanggal(tanggal);
        setJam(date.toLocaleTimeString("it-IT"));
    };

    const history = useHistory();
    const [title, setTitle] = useState("");
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

        const jadwal = {
            title,
            tanggal,
            jam
        };
        gett.post("/api/jadwal/create", jadwal)
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
                <div className="container mt-2 align-self-center px-4">
                    <TextField
                        label="Title"
                        id="title"
                        name="title"
                        onChange={e => setTitle(e.target.value)}
                        style={{ width: "100%" }}
                    />

                    <FormControl style={{ width: "100%" }}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Hari Pelajaran"
                                format="MM/dd/yyyy"
                                value={tanggal}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Jam Pelajaran"
                                // ampm={false}
                                value={idk}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    "aria-label": "change time"
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        style={{ width: "100%" }}
                        onClick={submitHandler}
                        className="mt-4"
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
