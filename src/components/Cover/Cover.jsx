import React from 'react';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// ASSETS
import image from '../../assets/cover.png';

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        margin: "114px 0 50px 0",
        '@media screen and (max-width: 599px)': {
            margin: "85px 0 23px 0",
        }
    },
    image: {
        width: 300,
        '@media screen and (max-width: 599px)': {
            width: 250,
        }
    }
}));

const Cover = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.imageContainer}>
            <img className={classes.image} src={image} alt="" />
        </Grid>
    );
}

export default Cover;