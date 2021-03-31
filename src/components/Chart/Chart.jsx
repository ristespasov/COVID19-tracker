import React, { useState, useEffect } from 'react';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// DATA
import { fetchGlobalHistoricalData } from '../../api';

// CHART
import { Line, Bar } from 'react-chartjs-2';

const useStyles = makeStyles(() => ({
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

const Chart = ({ data: { cases, recovered, active, deaths }, country }) => {
    const classes = useStyles();
    const [dailyData, setDailyData] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchGlobalHistoricalData());
        }
        fetchAPI();

    }, []);

    const historyCases = dailyData.cases;
    const historyRecovered = dailyData.recovered;
    const historyDeaths = dailyData.deaths;

    const optionsLineChart = {
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    type: "time",
                    time: {
                        parser: "MM/DD/YY",
                        tooltipFormat: "ll",
                    },
                },
            ],
            yAxes: [{
                ticks: {
                    callback(value) {
                        return Number(value).toLocaleString('en')
                    }
                }
            }]
        },
        tooltips: {
            displayColors: false,
            callbacks: {
                label: (tooltipItem, data) => {
                    var tooltipValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return parseInt(tooltipValue).toLocaleString();
                }
            }
        }
    }

    const optionsBarChart = {
        maintainAspectRatio: false,
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
        scales: {
            yAxes: [{
                ticks: {
                    callback(value) {
                        return Number(value).toLocaleString('en')
                    }
                }
            }]
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var tooltipValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return parseInt(tooltipValue).toLocaleString();
                }
            }
        }
    }

    const lineChart = (
        dailyData
            ? (
                <Line
                    options={optionsLineChart}
                    data={{
                        labels: Object.entries(historyCases).map(([key, value]) => { return key }),
                        datasets: [
                            {
                                data: Object.entries(historyCases).map(([key, value]) => { return value }),
                                label: 'Total',
                                borderColor: 'rgb(137, 0, 0, 0.8)',
                                fill: false
                            },
                            {
                                data: Object.entries(historyRecovered).map(([key, value]) => { return value }),
                                label: 'Recovered',
                                borderColor: 'rgb(0, 137, 68, 0.8)',
                                fill: false
                            },
                            {
                                data: Object.entries(historyDeaths).map(([key, value]) => { return value }),
                                label: 'Deaths',
                                borderColor: 'rgb(59, 59, 59, 0.8)',
                                fill: false
                            }
                        ]
                    }}
                />
            ) : null
    )

    const barChart = (
        cases
            ? (<Bar
                options={optionsBarChart}
                data={{
                    labels: ['Total', 'Recovered', 'Active', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgb(137, 0, 0, 0.8)', 'rgb(0, 137, 68, 0.8)', 'rgb(0, 120, 120, 0.8)', 'rgb(59, 59, 59, 0.8)'],
                            data: [cases, recovered, active, deaths]
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