import axios from 'axios';

export const getBooks = () =>
    axios.get(`${process.env.REACT_APP_BOOKS_API_URL}`);
