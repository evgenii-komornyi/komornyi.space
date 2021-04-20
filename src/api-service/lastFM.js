import http from './http-common';

const VERSION = '2.0';
const USER = 'sin-ov-death';
const API_KEY = '3ff7206303cfd81d5bc1f51fe8494568';

class LastFM {
    getUser() {
        return http.get(
            `/${VERSION}/?method=user.getinfo&user=${USER}&api_key=${API_KEY}&format=json`
        );
    }
    getLibrary(page = 1) {
        return http.get(
            `/${VERSION}/?method=library.getartists&api_key=${API_KEY}&user=${USER}&limit=10&page=${page}&format=json`
        );
    }
    getArtist(artist) {
        return http.get(
            `/${VERSION}/?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json`
        );
    }
}

export default new LastFM();
