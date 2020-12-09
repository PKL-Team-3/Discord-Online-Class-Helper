import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link, useHistory } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { delay } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";
import {
    toJadwal,
    toAbsensi,
    toMateri,
    toPengumuman,
    toPost,
    toQuiz
} from "../../actions/index";

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
    },
    asd: {
        minWidth: 12
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const history = useHistory();

    const [location, setLocation] = useState("");

    const value = useSelector(state => state.Nav);
    const dispatch = useDispatch();

    // const [value, setValue] = React.useState();

    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                history.push("/jadwal");
                dispatch(toJadwal());
                break;
            case 1:
                history.push("/absensi");
                dispatch(toAbsensi());
                break;
            case 2:
                history.push("/pengumuman");
                dispatch(toPengumuman());
                break;
            case 3:
                history.push("/post");
                dispatch(toPost());
                break;
            case 4:
                history.push("/quiz");
                dispatch(toQuiz());
                break;
            case 5:
                history.push("/materi");
                dispatch(toMateri());
                break;
            default:
                return value;
        }
        console.log(value);
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
                    </Typography>{" "}
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab className={classes.asd} label="Jadwal" />

                        <Tab className={classes.asd} label="Absensi" />
                        <Tab className={classes.asd} label="Pengumuman" />
                        <Tab className={classes.asd} label="Post" />

                        <Tab className={classes.asd} label="Quiz" />
                        <Tab
                            className={classes.asd}
                            label="Materi Pembelajaran"
                        />
                    </Tabs>
                    <ProfileModal />
                </Toolbar>
            </AppBar>
        </div>
    );
}
