import axios from 'axios';

export const getProjects = () =>
    axios.get(`${process.env.REACT_APP_PROJECTS_API_URL}`);
