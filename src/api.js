import axios from "axios";

const apiKey = process.env.REACT_APP_KEY; // Menggunakan REACT_APP_KEY dari .env
const baseUrl = process.env.REACT_APP_BASEURL; // Menggunakan REACT_APP_BASEURL dari .env

export const getMovieList = async () => {
    try {
        const movie = await axios.get(`${baseUrl}/movie/popular?page1&api_key=${apiKey}`);
        console.log({ movieList: movie.data.results });
        return movie.data.results; // Pastikan mengembalikan hasil
    } catch (error) {
        console.error("Error fetching movie list:", error);
    }
};


export const searchMovie = async (q) => {
    try {
        const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`); // Gunakan baseUrl dan apiKey dari environment
        return search.data.results; // Pastikan mengembalikan data
    } catch (error) {
        console.error("Error searching for movies:", error);
    }
};
