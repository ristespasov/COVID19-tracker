import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 165,
        "& *": {
            color: "#36d4c1"
        }
    }
}));

const Loading = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress
                size={100}
                thickness={4}
            />
        </div>
    );
}

export default Loading;