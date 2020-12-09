import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Pengumuman from "../views/Pengumuman";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    },
    bg: {
        backgroundColor: "#212121"
    }
}));

export default function Pengumumans() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [pengumumans, setPengumumans] = useState([]);
    const [users, setUsers] = useState([]);
    const [datas, setDatas] = useState([]);

    const token = localStorage.getItem("token");

    const gett = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: { Authorization: "Bearer " + token }
    });

    const getPengumumans = async () => {
        const pengumuman = await gett.get("/api/pengumuman/get");

        setPengumumans(pengumuman.data.data);
        setUsers(pengumuman.data.user);

        console.log(result);
        const a = pengumuman.data.data;
        const b = pengumuman.data.user;

        const result = a.map(function(el, x = 0) {
            var o = Object.assign({}, el);
            o.username = b[x];
            x++;
            console.log(x);
            return o;
        });
        setDatas(result);

        const c = [...a, ...b];
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(result);
        // console.log(pengumuman);
        // setPengumumans(pengumuman.data.data);
        // setUsers(pengumuman.data.user);
        // console.log(users);
        // console.log(pengumumans);
        // const test = Object.assign({}, users, pengumumans);
        // setDatas(Object.assign({}, users, pengumumans));
        // console.log(datas);
    };

    useEffect(() => {
        getPengumumans();
        return () => {};
    }, []);

    return (
        <div className={classes.root}>
            {datas.map(data => {
                const { title, content, id, created_at, username } = data;
                return (
                    <Accordion
                        key={id}
                        className={classes.bg}
                        expanded={expanded === `panel${id}`}
                        onChange={handleChange(`panel${id}`)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>
                                {title}
                            </Typography>

                            <Typography className={classes.secondaryHeading}>
                                {username} | Date: {created_at.substring(0, 10)}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{content}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}
