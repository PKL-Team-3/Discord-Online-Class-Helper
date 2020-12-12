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
import { login } from "../../actions/index";
import { Link, useHistory, Redirect } from "react-router-dom";

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

function Login() {
    const classes = useStyles();
    const history = useHistory();
    const [checked, setChecked] = useState(true);
    const handleChange = event => {
        setChecked(event.target.checked);
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        console.log(username, password);

        const user = {
            username: username,
            password: password
        };
        axios.post("/api/auth/login", user).then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.access_token);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("user_id", res.data.id);
            localStorage.setItem("username", res.data.username);
            history.push("/");
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
                    <form onSubmit={submitHandler}>
                        <Box className="px-2">
                            <TextField
                                label="username"
                                id="username"
                                name="username"
                                onChange={e => setUsername(e.target.value)}
                                style={{ width: "100%" }}
                            />
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                className="mt-3"
                                onChange={e => setPassword(e.target.value)}
                                style={{ width: "100%" }}
                            />
                        </Box>
                        <FormControlLabel
                            className="px-2 mt-2"
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{
                                        "aria-label": "primary checkbox"
                                    }}
                                />
                            }
                            label="Remember Me"
                        />

                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                style={{ width: "100%" }}
                                type="submit"
                            >
                                Login
                            </Button>
                        </CardActions>
                    </form>
                    <Typography
                        variant="body2"
                        className="px-2 mt-2"
                        gutterBottom
                    >
                        <Link to="/register">
                            <Ling>Register A New Account</Ling>
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
export default Login;
