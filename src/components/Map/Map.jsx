import React, { useState, useEffect } from 'react';

// MAP 
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { Circle, Popup } from 'react-leaflet';

// API DATA
import { fetchCountriesData } from '../../api';

// COUNT UP
import CountUp from 'react-countup';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    map: {
        marginTop: 64,
        height: 'calc(100vh - 64px)',
        '& .leaflet-container': {
            height: '100%'
        }
    },
    popup: {
        width: 150,
        '& .MuiTypography-root': {
            margin: '8px 0'
        }
    },
    flag: {
        width: 150,
        borderRadius: 5
    }

}));

const Map = () => {
    const classes = useStyles();
    const [mapCenter] = useState({ lat: 34.3068166, lng: -17.7382783 });
    const [mapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setMapCountries(await fetchCountriesData());
        }

        fetchAPI();
    }, []);

    return (
        <Grid className={classes.map}>
            <LeafletMap center={mapCenter} zoom={mapZoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {mapCountries.map((country, i) => (
                    <Circle
                        key={i}
                        center={[country.countryInfo.lat, country.countryInfo.long]}
                        color='rgb(0, 120, 120, 0.8)'
                        fillColor='rgb(0, 120, 120)'
                        fillOpacity={0.4}
                        radius={Math.sqrt(country.active) * 600}
                    >
                        <Popup>
                            <Grid className={classes.popup}>
                                <img
                                    className={classes.flag}
                                    src={country.countryInfo.flag}
                                    alt="Country flag"
                                />
                                <Typography align="center">{country.country}</Typography>
                                <Typography variant="body2">
                                    Total:{' '}
                                    <CountUp
                                        start={0}
                                        end={country.cases}
                                        duration={1}
                                        separator=","
                                    />
                                </Typography>
                                <Typography variant="body2">
                                    Recovered: {' '}
                                    <CountUp
                                        start={0}
                                        end={country.recovered}
                                        duration={1}
                                        separator=","
                                    />
                                </Typography>
                                <Typography variant="body2">
                                    Active:{' '}
                                    <CountUp
                                        start={0}
                                        end={country.active}
                                        duration={1}
                                        separator=","
                                    />
                                </Typography>
                                <Typography variant="body2">
                                    Deaths:{' '}
                                    <CountUp
                                        start={0}
                                        end={country.deaths}
                                        duration={1}
                                        separator=","
                                    />
                                </Typography>
                            </Grid>
                        </Popup>
                    </Circle>
                ))}
            </LeafletMap>
        </Grid>
    );
}

export default Map;