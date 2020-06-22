import React, { useState, useEffect } from 'react';

// COMPONENTS
import Cover from '../Cover/Cover';
import Cards from '../Cards/Cards';
import Input from '../Input/Input';
import Chart from '../Chart/Chart';

// DATA
import { fetchData } from '../../api';

const Status = () => {
    const [{ data, country }, setData] = useState({ data: {}, country: '' });

    useEffect(() => {
        const fetchedData = async () => {
            setData({ data: await fetchData() });
        };

        fetchedData();
    }, [])

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        setData({ data: fetchedData, country: country });
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Cover />
            <Cards data={data} />
            <Input handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country} />
        </div>
    )
}

export default Status;