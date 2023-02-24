import axios from "axios";

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})
export const baseImg ='https://image.tmdb.org/t/p/original/';

export default api;

