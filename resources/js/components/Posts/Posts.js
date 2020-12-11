import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: "#212121"
    },
    media: {
        height: 140
    },
    bg: {
        backgroundColor: "#212121"
    }
});

export default function Posts() {
    const classes = useStyles();
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [datas, setDatas] = useState([]);

    const token = localStorage.getItem("token");

    const gett = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: { Authorization: "Bearer " + token }
    });

    const getPosts = async () => {
        const post = await gett.get("/api/post/get");

        console.log(post);
        setPosts(post.data.data);
        setUsers(post.data.user);

        console.log(result);
        const a = post.data.data;
        const b = post.data.user;

        const result = a.map(function(el, x = 0) {
            var o = Object.assign({}, el);
            o.username = b[x];
            x++;
            console.log(x);
            return o;
        });
        setDatas(result);

        // const c = [...a, ...b];
        // console.log(a);
        // console.log(b);
        // console.log(c);
        console.log(result);
    };

    useEffect(() => {
        getPosts();
        return () => {};
    }, []);

    const clickHandler = () => {
        history.push("/post/create");
    };

    return (
        <React.Fragment>
            <Button
                onClick={clickHandler}
                className="mt-5"
                variant="contained"
                color="primary"
            >
                Create Post
            </Button>
            <div className="row">
                {datas.map(data => {
                    const {
                        title,
                        content,
                        id,
                        category,
                        thumbnail,
                        username
                    } = data;
                    return (
                        <div className="col-4 mt-5">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={thumbnail}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {username}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => {
                                            history.push(`/post/view/${id}`);
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    );
                })}{" "}
            </div>
        </React.Fragment>
    );
}
