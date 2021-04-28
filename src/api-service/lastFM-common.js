import axios from 'axios';

export default axios.create({
    baseURL: 'https://ws.audioscrobbler.com',
    headers: {
        'Content-type': 'application/json',
    },
});
