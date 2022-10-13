import axios from 'axios';

export const getHolidays = (year, countryCode) =>
    axios.get(`${process.env.REACT_APP_HOLIDAYS_API}${year}/${countryCode}`);
