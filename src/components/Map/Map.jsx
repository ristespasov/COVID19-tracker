import React from 'react';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    map: {
        width: "100%",
        height: "auto",
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
                title="map"
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