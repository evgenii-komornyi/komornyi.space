import axios from 'axios';

export default axios.create({
    baseURL: 'http://ws.audioscrobbler.com',
    headers: {
        'Content-type': 'application/json',
    },
});
