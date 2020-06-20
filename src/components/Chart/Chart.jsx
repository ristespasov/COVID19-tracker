import React, { useState, useEffect } from 'react';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// DATA
import { fetchDailyData } from '../../api';

// CHART
import { Line, Bar } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
        height: 350,
        margin: "50px auto",
        "@media screen and (max-width: 768px)": {
            width: "95%",
            height: 250,
            margin: "50px auto",
        }
    },
}));

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const classes = useStyles();
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
            ? (<Line
                options={{ maintainAspectRatio: false }}
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                        {
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#ff416c',
                            backgroundColor: 'rgb(255, 65, 108, 0.5)',
                            fill: true
                        },
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: '#7F8C8D',
                            backgroundColor: 'rgb(127, 140, 141, 0.5)',
                            fill: true
                        }]
                }}
            />) : null
    )

    const barChart = (
        confirmed
            ? (<Bar
                options={{
                    maintainAspectRatio: false,
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` }
                }}
                data={{
                    labels: ['Infected', 'Recovered', 'Active', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['#ff416c', '#52BE80', '#2980B9', '#7F8C8D'],
                            data: [confirmed.value, recovered.value, (confirmed.value - (recovered.value + deaths.value)), deaths.value]
                        }]
                }}
            />) : null
    )

    return (
        <Grid
            container
            className={classes.root}
        >
            {country ? barChart : lineChart}
        </Grid>
    )
}

export default Chart;