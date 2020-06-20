import React from 'react';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// ASSETS
import image from '../../assets/image.png';

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        display: "flex",
        alignItems: "center",
        margin: "50px auto",
        '@media screen and (max-width: 599px)': {
            margin: "25px auto",
        }
    },
    image: {
        width: 300,
        '@media screen and (max-width: 599px)': {
            width: 250,
        }
    }
}));

const Covid = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.imageContainer}>
            <img className={classes.image} src={image} alt="" />
        </Grid>
    );
}

export default Covid;