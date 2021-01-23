import React, { useState, useEffect } from 'react';

// COMPONENTS
import Input from '../Input/Input';
import Cards from '../Cards/Cards';
import Chart from '../Chart/Chart';

// DATA
import { fetchData } from '../../api';

const Status = () => {
    const [{ data, country }, setData] = useState({ data: {}, country: {} });

    useEffect(() => {
        const fetchAPI = async () => {
            setData({ data: await fetchData() });
        };

        fetchAPI();
    }, [])

    const handleCountryChange = async (country) => {
        const fetchAPI = await fetchData(country);
        setData({ data: fetchAPI, country: country });
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Input handleCountryChange={handleCountryChange} />
            <Cards data={data} />
            <Chart data={data} country={country} />
        </div>
    )
}

export default Status;