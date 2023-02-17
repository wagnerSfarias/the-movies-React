import axios from "axios";

// export const API_KEY = '5bf5177de87a5166f67da9c486e2b2cb'

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default api;