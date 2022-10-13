import axios from 'axios';

export const getWorld = () =>
    axios.get(`${process.env.REACT_APP_COVID_API_URL}`);

export const getCountries = () =>
    axios.get(`${process.env.REACT_APP_COVID_API_URL}/countries`);

export const getByCountry = country =>
    axios.get(`${process.env.REACT_APP_COVID_API_URL}/countries/${country}/`);
