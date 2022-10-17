import axios from 'axios';

export const getProjects = cancelationToken =>
    axios.get(`${process.env.REACT_APP_PROJECTS_API_URL}`, {
        cancelToken: cancelationToken,
    });
