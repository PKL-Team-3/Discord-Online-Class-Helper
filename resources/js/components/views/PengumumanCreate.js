import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Ling from "@material-ui/core/Link";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/index";
import { Link, useHistory, Redirect } from "react-router-dom";
import Navbar from "../layouts/Navbar";

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
        minHeight: 10,
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

function Login() {
    const classes = useStyles();
    const history = useHistory();
    const [checked, setChecked] = useState(true);
    const handleChange = event => {
        setChecked(event.target.checked);
    };

    const token = localStorage.getItem("token");

    const gett = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: {
            Authorization: "Bearer " + token,
            "Access-Control-Allow-Origin": true
        }
    });

    const user_id = localStorage.getItem("user_id");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        console.log(title, content);

        const username = localStorage.getItem("username");

        const datae = {
            username: "Notification Cat",
            avatar_url:
                "https://cdn.discordapp.com/attachments/786227293295083581/787008780155617360/unknown.png",
            content: "Pengumuman Baru",
            embeds: [
                {
                    author: {
                        name: username,
                        icon_url:
                            "https://cdn.discordapp.com/attachments/786227293295083581/786862271779307520/90264738_509649109732988_9037524068902895616_n.png"
                    },
                    title: title,
                    url: "http://127.0.0.1:8000/pengumuman",
                    description: content,
                    color: 9620421
                }
            ]
        };
        console.log(datae);
        const pengumuman = {
            user_id,
            title,
            content
        };
        gett.post(
            "https://discord.com/api/webhooks/787252980608008192/Tj31k7nQg5NzrBRX7cpVzuREM23LLrZq1dQK6kfz0cZnN1w8oaUHUD4lDyHIyzHaGkk8",
            datae
        )
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err.response));
        gett.post("/api/pengumuman/create", pengumuman)
            .then(res => {
                console.log(res.data);
                history.push("/pengumuman");
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
                <CardContent className="align-self-center px-4">
                    <form onSubmit={submitHandler}>
                        <Box className="px-2">
                            <TextField
                                label="title"
                                id="title"
                                name="title"
                                onChange={e => setTitle(e.target.value)}
                                style={{ width: "100%" }}
                            />
                            <TextField
                                id="content"
                                name="content"
                                label="content"
                                type="text"
                                className="mt-3"
                                onChange={e => setContent(e.target.value)}
                                style={{ width: "100%" }}
                            />
                        </Box>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                style={{ width: "100%" }}
                                type="submit"
                            >
                                Create
                            </Button>
                        </CardActions>
                    </form>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
export default Login;
