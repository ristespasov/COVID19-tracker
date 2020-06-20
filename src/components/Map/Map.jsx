import React from 'react';

// COMPONENTS
import Loading from '../Loading/Loading';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "calc(100vh - 64px)",

    },
    map: {
        width: "100%",
        height: "auto",
        marginTop: -21,
        '& section.site-link::before': {
            visibility: 'hidden !important'
        }
    },

}));

const Map = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <iframe
                className={classes.map}
                src="https://coronavirus.app/map?embed=true"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen>
            </iframe >
        </Grid>
    );
}

export default Map;