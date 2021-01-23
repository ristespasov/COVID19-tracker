import React from 'react';

// // MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#e2e2e2',
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Typography color="textSecondary">&copy; RISTE SPASOV {new Date().getFullYear()}</Typography>
        </Grid>
    )
}

export default Footer;