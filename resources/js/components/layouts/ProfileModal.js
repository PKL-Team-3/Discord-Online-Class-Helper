import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import Axios from "axios";
import { PlayCircleFilledWhite } from "@material-ui/icons";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles(theme => ({
    bg: {
        backgroundColor: "#212121",
        position: "absolute",
        minWidth: 400,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        color: "#ffffff"
    },
    white: {
        color: "#111111"
    },
    avatar: {
        maxWidth: 25,
        borderRadius: 25
    },
    modala: {
        maxWidth: 100,
        borderRadius: "50%"
    }
}));

export default function ProfileModal() {
    const history = useHistory();
    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("avatar");
        history.push("/login");
    };
    const [user, setUser] = useState([]);

    const avatar = localStorage.getItem("avatar");

    const token = localStorage.getItem("token");

    const gett = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: { Authorization: "Bearer " + token }
    });

    const getUser = async () => {
        const response = await gett.get("/api/auth/user");
        const user = response.data;
        setUser(user);
        console.log(response.data);
    };

    useEffect(() => {
        getUser();
        return () => {};
    }, []);

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.bg} color="secondary">
            <h2>Profile</h2>
            <div className="d-flex">
                <img src={avatar} className={classes.modala} alt="" />
                <div className="float-right ml-3">
                    <h4 id="simple-modal-title">username: {user.username}</h4>
                    {user.role === "guest" ? (
                        <p id="simple-modal-description">
                            Please sync your account by typing !sync {user.id}{" "}
                            in the #school-bot channel{" "}
                        </p>
                    ) : (
                        <p>Role: {user.role}</p>
                    )}
                </div>
            </div>

            <Button
                className="mt-3"
                variant="outlined"
                onClick={logoutHandler}
                color="danger"
            >
                Logout
            </Button>
        </div>
    );

    return (
        <div>
            {avatar ? (
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleOpen}
                >
                    <img className={classes.avatar} src={avatar} alt="" />{" "}
                </IconButton>
            ) : (
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleOpen}
                >
                    <AccountCircle />
                </IconButton>
            )}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
