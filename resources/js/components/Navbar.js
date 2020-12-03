import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        minWidth: 425,
        maxWidth: 427,
        minHeight: 314,
        maxHeight: 314
    },
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
        height: 314,
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

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <React.Fragment>
            <Box justifyContent="center" display="flex" className="mt-5">
                <IconButton
                    className={`${classes.holder} ${classes.marginAutoContainer}`}
                />
            </Box>
            <Card
                className={classes.marginAutoContainer}
                style={{ backgroundColor: "#232931", marginTop: 35 }}
            >
                <CardContent className="align-self-center">
                    <TextField label="username" />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className="mt-3"
                    />
                    <CardActions>
                        <Button color="primary" size="small">
                            Login
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
