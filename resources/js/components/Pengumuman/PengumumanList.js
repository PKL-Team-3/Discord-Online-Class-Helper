import React from "react";
import Pengumumans from "./Pengumumans";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function PengumumanList() {
    const history = useHistory();
    const clickHandler = () => {
        history.push("/pengumuman/create");
    };

    return (
        <div>
            {localStorage.getItem("role") === "Guru" ? (
                <Button
                    onClick={clickHandler}
                    className="mb-5"
                    variant="contained"
                    color="primary"
                >
                    Create Pengumuman
                </Button>
            ) : (
                ""
            )}
            <Pengumumans />
        </div>
    );
}
