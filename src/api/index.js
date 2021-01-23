import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19';

export const fetchData = async (country) => {
    let changableUrl = `${url}/all`;

    if (country) {
        changableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { cases, recovered, active, deaths, updated } } = await axios.get(changableUrl);

        const response = {
            cases,
            recovered,
            active,
            deaths,
            updated
        }
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountriesData = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchGlobalHistoricalData = async () => {
    try {
        const { data } = await axios.get(`${url}/historical/all`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

