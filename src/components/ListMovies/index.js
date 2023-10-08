import React, { useState, useEffect } from 'react';
import { RowCards, SubTitle, BtnMovie, SubTitleSkeleton, MovieCardSkeleton } from './styles';
import api from '../../services/api';
import { baseImg } from '../../services/api';
import { useHorizontalScroll } from '../../utils/scrollHorizontal';
import { getListMovies } from '../../utils/movie';


export default function ListMovie() {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([]);
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);

  const scrollMov = useHorizontalScroll();
  const scrollPop = useHorizontalScroll();
  const scrollTop = useHorizontalScroll();

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

      {loading ?
        (<SubTitleSkeleton></SubTitleSkeleton>) :
        (
          <SubTitle>No Cinema</SubTitle>
        )}
      <RowCards ref={scrollMov}>

        {loading ? (<>
          {Array(10).fill().map((data, index) => {
            return (
              <BtnMovie to={'/'} key={index}>
                <MovieCardSkeleton key={index}></MovieCardSkeleton>
              </BtnMovie>
            )
          })}

        </>) : (<>

          {movie?.map(movie => {
            return (
              <BtnMovie to={`/detail/${movie.id}`}
                key={movie.id}>
                <img src={movie.poster_path ? `${baseImg}${movie.poster_path}` : 'null'}
                  alt={movie.name} />
              </BtnMovie>
            )
          })
          }
        </>)}

      </RowCards>
      {loading ?
        (<SubTitleSkeleton></SubTitleSkeleton>) :
        (
          <SubTitle>Popular</SubTitle>
        )}
      <RowCards ref={scrollPop}>

        {loading ? (<>
          {Array(10).fill().map((data, index) => {
            return (
              <BtnMovie to={'/'} key={index}>
                <MovieCardSkeleton key={index}></MovieCardSkeleton>
              </BtnMovie>
            )
          })}

        </>) : (<>
          {popular?.map(movie => {
            return (
              <BtnMovie to={`/detail/${movie.id}`}
                key={movie.id}>
                <img src={movie.poster_path ? `${baseImg}${movie.poster_path}` : 'null'}
                  alt={movie.name} />
              </BtnMovie>
            )
          })
          }
        </>)}

      </RowCards>
      {loading ?
        (<SubTitleSkeleton></SubTitleSkeleton>) :
        (
          <SubTitle>Bem-Avaliados</SubTitle>
        )}
      <RowCards ref={scrollTop}>

        {loading ? (<>
          {Array(10).fill().map((data, index) => {
            return (
              <BtnMovie to={'/'} key={index}>
                <MovieCardSkeleton key={index}></MovieCardSkeleton>
              </BtnMovie>
            )
          })}

        </>) : (<>

          {top?.map(movie => {
            return (
              <BtnMovie to={`/detail/${movie.id}`}
                key={movie.id}>
                <img src={movie.poster_path ? `${baseImg}${movie.poster_path}` : 'null'}
                  alt={movie.name} />
              </BtnMovie>
            )
          })
          }

        </>)}

      </RowCards>

    </>

  );

}
