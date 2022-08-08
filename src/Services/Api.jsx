import axios from "axios";

export class Api {
    BASE_URL = `https://api.themoviedb.org/3/`;
    API_KEY = '56ed7f4027b248926961d2ef400ff8bc';

    async fetchTrending() {
        const response = await axios.get(`${this.BASE_URL}trending/movie/day?api_key=${this.API_KEY}`);
        return response.data.results;
    };

    async fetchDetails(id) {
        const response = await axios.get(`${this.BASE_URL}movie/${id}?api_key=${this.API_KEY}`);
        return response.data;
    }

    async fetchCast(id) {
        const response = await axios.get(`${this.BASE_URL}movie/${id}/credits?api_key=${this.API_KEY}`);
        return response.data.cast;
    };

    async fetchReviews(id) {
        const response = await axios.get(`${this.BASE_URL}movie/${id}/reviews?api_key=${this.API_KEY}`);
        return response.data.results;
    };

    async fetchMovies(searchQuery) {
        const response = await axios.get(`${this.BASE_URL}search/movie?api_key=${this.API_KEY}&query=${searchQuery}`);
        return response.data.results;
    };
};  