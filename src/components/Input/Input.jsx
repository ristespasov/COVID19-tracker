import React, { useState, useEffect } from 'react';

// DATA
import { fetchCountriesData } from '../../api';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { NativeSelect, FormControl, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        margin: '114px auto 50px auto',
        display: 'flex',
        justifyContent: 'center'
    },
    form: {
        width: "90%",
        '& .MuiNativeSelect-root': {
            height: 30,
            paddingLeft: 10
        }
    }
}));

const Input = ({ handleCountryChange }) => {
    const classes = useStyles();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountriesData());
        }

        fetchAPI();
    }, [setCountries]);

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={8} md={4} style={{ textAlign: 'center' }}>
                <FormControl className={classes.form}>
                    <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value="" >Global</option>
                        {countries.map((country, index) => <option key={index} value={country.country} className={classes.option}>{country.country}</option>)}
                    </NativeSelect>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default Input;