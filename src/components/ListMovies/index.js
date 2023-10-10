import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { getListMovies } from '../../utils/movie';
import CarrosuelMovies from '../CarrosuelMovies';

export default function ListMovie() {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([]);
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {

    async function getMovies() {

      const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing', {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'pt-BR',
            page: 1
          }
        }),
        api.get('/movie/popular', {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'pt-BR',
            page: 1
          }
        }),
        api.get('/movie/top_rated', {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'pt-BR',
            page: 1
          }
        }),
      ])

      const nowList = getListMovies(15, nowData.data.results);
      const popularList = getListMovies(15, popularData.data.results);
      const topList = getListMovies(10, topData.data.results);
    
      setMovie(nowList);
      setPopular(popularList);
      setTop(topList);
      setLoading(false);
    }

    getMovies();

  }, [])

  return (
    <>
        <CarrosuelMovies loading={loading} title={'No Cinema'} data={movie}/>
        <CarrosuelMovies loading={loading} title={'Popular'} data={popular}/>
        <CarrosuelMovies loading={loading} title={'Bem-Avaliados'} data={top}/>
    </>

  );

}
