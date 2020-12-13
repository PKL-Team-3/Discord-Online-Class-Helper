import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Autorenew } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 325,
        backgroundColor: "#212121",
        marginTop: 25
    },
    details: {
        display: "flex",
        flexDirection: "column"
    },
    content: {
        flex: "1 0 auto"
    },
    cover: {
        marginLeft: "auto",
        minWidth: 100,
        height: 100,
        marginRight: 10
    },
    controls: {
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    playIcon: {
        height: 38,
        width: 38
    }
}));

export default function Jadwals() {
    const classes = useStyles();
    const theme = useTheme();

    const dayjs = require("dayjs");
    const weekOfYear = require("dayjs/plugin/weekOfYear");

    dayjs.extend(weekOfYear);

    const [materis, setMateris] = useState([]);
    const [users, setUsers] = useState([]);
    const [datas, setDatas] = useState([]);

    const token = localStorage.getItem("token");

    const gett = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: { Authorization: "Bearer " + token }
    });

    const getMateris = async () => {
        const materis = await gett.get("/api/jadwal/get");

        console.log(materis);
        setMateris(materis.data.data);
        setUsers(materis.data.user);

        console.log(result);
        const a = materis.data.data;
        const b = materis.data.user;

        const result = a.map(function(el, x = 0) {
            var o = Object.assign({}, el);
            o.username = b[x];
            x++;
            console.log(x);
            return o;
        });
        setDatas(result);
        console.log(currentWeek);
        // const c = [...a, ...b];
        // console.log(a);
        // console.log(b);
        // console.log(c);
        console.log(result);
    };

    const currentWeek = dayjs(Date.now()).week();

    const avatar = localStorage.getItem("avatar");

    const history = useHistory();

    const role = localStorage.getItem("role");

    useEffect(() => {
        getMateris();
        return () => {};
    }, []);

    const clickHandler = () => {
        history.push("/materi/create");
    };

    return (
        <React.Fragment>
            {role === "Guru" ? (
                <Button
                    onClick={clickHandler}
                    className=""
                    variant="contained"
                    color="primary"
                >
                    Create Materi
                </Button>
            ) : (
                ""
            )}
            <Typography className="text-white mt-5" variant="h4" gutterBottom>
                Senin
            </Typography>
            <div className="row">
                {datas.map(data => {
                    const {
                        title,
                        description,
                        type,
                        attachment,
                        username,
                        id,
                        tanggal,
                        jam
                    } = data;
                    {
                        if (dayjs(tanggal).day() === 0) {
                            if (currentWeek === dayjs(tanggal).week()) {
                                return (
                                    <div
                                        key={id}
                                        onClick={() => {
                                            {
                                                console.log(
                                                    dayjs(tanggal).week()
                                                );
                                                console.log(
                                                    dayjs(tanggal).day()
                                                );
                                            }
                                        }}
                                        className="col-4"
                                        role="button"
                                    >
                                        <Card className={classes.root}>
                                            <div className={classes.details}>
                                                <CardContent
                                                    className={classes.content}
                                                >
                                                    <Typography
                                                        component="h5"
                                                        variant="h5"
                                                    >
                                                        {title}
                                                    </Typography>
                                                    <Typography
                                                        variant="subtitle1"
                                                        color="textSecondary"
                                                    >
                                                        {username}
                                                        <br />
                                                        {jam}
                                                    </Typography>
                                                </CardContent>
                                            </div>

                                            <CardMedia
                                                className={classes.cover}
                                                image={avatar}
                                                title={type}
                                            />
                                        </Card>
                                    </div>
                                );
                            }
                        }
                    }
                })}{" "}
            </div>
        </React.Fragment>
    );
}
