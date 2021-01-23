import React from 'react';

// COMPONENTS
import Loading from '../Loading/Loading';

// COUNT UP
import CountUp from 'react-countup';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardTotal: {
        backgroundImage: 'linear-gradient(to bottom right, #890000, #ff8989)',
        color: 'white',
        margin: "0 10px",
        "@media screen and (max-width: 1280px)": {
            margin: "0 10px 10px 10px"
        }
    },
    cardRecovered: {
        backgroundImage: 'linear-gradient(to bottom right, #008944, #75ffba)',
        color: 'white',
        margin: "0 10px",
        "@media screen and (max-width: 1280px)": {
            margin: "0 10px 10px 10px"
        }
    },
    cardActive: {
        backgroundImage: 'linear-gradient(to bottom right, #007878, #78ffff)',
        color: 'white',
        margin: "0 10px",
        "@media screen and (max-width: 1280px)": {
            margin: "0 10px 10px 10px"
        }
    },
    cardDeaths: {
        backgroundImage: 'linear-gradient(to bottom right, #3b3b3b, #bbbbbb)',
        color: 'white',
        margin: "0 10px",
        "@media screen and (max-width: 1280px)": {
            margin: "0 10px 10px 10px"
        }
    },
}));

const Cards = ({ data: { cases, recovered, active, deaths, updated } }) => {
    const classes = useStyles();
    const date = new Date(updated).toDateString();

    if (!cases) {
        return <Loading />;
    }
    return (
        <Grid container justify="center">
            <Grid item component={Card} xs={12} sm={5} md={4} lg={2} className={classes.cardTotal}>
                <CardContent >
                    <Typography align="center" gutterBottom>Total</Typography>
                    <Typography align="center" variant="h4">
                        <CountUp
                            start={0}
                            end={cases}
                            duration={2}
                            separator=","
                        />
                    </Typography>
                </CardContent>
                <Typography align="right" variant="caption" display="block" style={{ paddingRight: 7 }}>{date}</Typography>
            </Grid>
            <Grid item component={Card} xs={12} sm={5} md={4} lg={2} className={classes.cardRecovered}>
                <CardContent >
                    <Typography align="center" gutterBottom>Recovered</Typography>
                    <Typography align="center" variant="h4">
                        <CountUp
                            start={0}
                            end={recovered}
                            duration={2}
                            separator=","
                        />
                    </Typography>
                </CardContent>
                <Typography align="right" variant="caption" display="block" style={{ paddingRight: 7 }}>{date}</Typography>
            </Grid>
            <Grid item component={Card} xs={12} sm={5} md={4} lg={2} className={classes.cardActive}>
                <CardContent >
                    <Typography align="center" gutterBottom>Active</Typography>
                    <Typography align="center" variant="h4">
                        <CountUp
                            start={0}
                            end={active}
                            duration={2}
                            separator=","
                        />
                    </Typography>
                </CardContent>
                <Typography align="right" variant="caption" display="block" style={{ paddingRight: 7 }}>{date}</Typography>
            </Grid>
            <Grid item component={Card} xs={12} sm={5} md={4} lg={2} className={classes.cardDeaths}>
                <CardContent >
                    <Typography align="center" gutterBottom>Deaths</Typography>
                    <Typography align="center" variant="h4">
                        <CountUp
                            start={0}
                            end={deaths}
                            duration={2}
                            separator=","
                        />
                    </Typography>
                </CardContent>
                <Typography align="right" variant="caption" display="block" style={{ paddingRight: 7 }}>{date}</Typography>
            </Grid>
        </Grid>
    )
}

export default Cards;
