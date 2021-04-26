import http from './covid-19-common';

class Covid {
    getWorld() {
        return http.get(`api/`);
    }

    getCountries() {
        return http.get('api/countries');
    }

    getByCountry(country) {
        return http.get(`api/countries/${country}/`);
    }
}

export default new Covid();
