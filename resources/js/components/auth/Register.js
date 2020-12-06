import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import axios from "axios";
import Ling from "@material-ui/core/Link";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../actions/index";

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
        minHeight: 314,
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

function Register() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const isRegistered = useSelector(state => state.isRegistered);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(username, password, confirmPassword);

        const user = {
            id:
                Math.random()
                    .toString(36)
                    .substring(2, 15) +
                Math.random()
                    .toString(36)
                    .substring(2, 15),
            username: username,
            password: password,
            password_confirmation: confirmPassword
        };
        axios.post("/api/auth/signup", user).then(res => {
            console.log(res);
            dispatch(register());
            history.push("/login");
        });
    };

    return (
        <React.Fragment>
            <Box justifyContent="center" display="flex" className="mt-5">
                <img
                    src="https://cdn.discordapp.com/attachments/698132350067802152/785165420621070366/logo.png"
                    className={classes.holder}
                />
            </Box>
            <Card
                className={classes.marginAutoContainer}
                style={{ backgroundColor: "#232931", marginTop: 35 }}
            >
                <CardContent className="align-self-center px-4">
                    <form onSubmit={handleSubmit}>
                        <Box className="px-2">
                            <TextField
                                label="username"
                                style={{ width: "100%" }}
                                id="username"
                                name="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                className="mt-3"
                                value={password}
                                style={{ width: "100%" }}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <TextField
                                id="confirm_password"
                                name="confirm_password"
                                label="Confirm Password"
                                value={confirmPassword}
                                type="password"
                                autoComplete="current-password"
                                className="mt-2"
                                style={{ width: "100%" }}
                                onChange={e =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </Box>

                        <CardActions className="mt-3">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="medium"
                                style={{ width: "100%" }}
                            >
                                Register
                            </Button>
                        </CardActions>
                    </form>
                    <Typography
                        variant="body2"
                        className="px-2 mt-2"
                        gutterBottom
                    >
                        <Link to="/login">
                            <Ling>Login</Ling>
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
export default Register;
