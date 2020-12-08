import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    holder: {
        width: 36,
        height: 36,
        marginRight: 13
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const history = useHistory();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        history.push("/login");
    };

    return (
        <div className={classes.root}>
            <AppBar color="secondary" position="static">
                <Toolbar>
                    <img
                        src="https://cdn.discordapp.com/attachments/698132350067802152/785165420621070366/logo.png"
                        className={classes.holder}
                    />

                    <Typography variant="h6" className={classes.title}>
                        Discord Class
                    </Typography>
                    <Button color="inherit">Jadwal</Button>
                    <Button color="inherit">Absensi</Button>
                    <Button color="inherit">Pengumuman</Button>
                    <Button color="inherit">Post</Button>
                    <Button color="inherit">Materi Pembelajaran</Button>
                    <Button color="inherit">Quiz</Button>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Button onClick={logoutHandler} color="inherit">
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
