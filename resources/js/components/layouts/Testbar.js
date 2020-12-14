import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        }
    },
    input: {
        display: "none"
    }
}));

export default function UploadButtons() {
    const classes = useStyles();

    const uploadInputRef = useRef(null);

    return (
        <Fragment>
            <input
                ref={uploadInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={onChange}
            />
            <Button
                onClick={() =>
                    uploadInputRef.current && uploadInputRef.current.click()
                }
                variant="contained"
            >
                Upload
            </Button>
        </Fragment>
    );
}
