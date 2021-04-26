import axios from 'axios';

export default axios.create({
    baseURL: 'https://covid.mathdro.id/',
    headers: {
        'Content-type': 'application/json',
    },
});
