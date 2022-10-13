import axios from 'axios';

const VERSION = process.env.REACT_APP_LASTFM_VERSION;
const USER = process.env.REACT_APP_LASTFM_USER;
const API_KEY = process.env.REACT_APP_LASTFM_API_KEY;

export const getUser = () =>
    axios.get(
        `${process.env.REACT_APP_LASTFM_API_URL}/${VERSION}/?method=user.getinfo&user=${USER}&api_key=${API_KEY}&format=json`
    );

export const getLibrary = (page = 1) =>
    axios.get(
        `${process.env.REACT_APP_LASTFM_API_URL}/${VERSION}/?method=library.getartists&api_key=${API_KEY}&user=${USER}&limit=10&page=${page}&format=json`
    );

export const getArtist = artist =>
    axios.get(
        `${process.env.REACT_APP_LASTFM_API_URL}/${VERSION}/?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json`
    );
