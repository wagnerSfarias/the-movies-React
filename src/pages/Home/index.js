import React, { useState, useEffect } from 'react';
import { 
  Container, 
  ContainerBanner, 
  BannerContent, 
  ContainerMovies,
  ContainerSkeleton, 
  BannerSkeleton, 
  TitleSkeleton
} from './styles'

import api from '../../services/api';
import { baseImg } from '../../services/api';
import HeaderHome from '../../components/HeaderHome';
import ListMovie from '../../components/ListMovies';
import { Link } from 'react-router-dom';

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let isActive = true;
    async function loadMovie() {

      window.scrollTo(0, 0);
      const response = await api.get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
      if (isActive) {
        const data = response.data?.results;
        const random = Math.floor(Math.random() * data.length)

        setMovie(data[random])
        setLoading(false);
      }

    }
    loadMovie();

    return () => {
      isActive = false;
    }
  }, [])


  return (
    <Container>
      <HeaderHome />
      {loading ? (
        <ContainerSkeleton>
          <BannerSkeleton>
            <TitleSkeleton></TitleSkeleton>
          </BannerSkeleton>
        </ContainerSkeleton>
      ) : (

        <Link to={`/detail/${movie.id}`}>
          <ContainerBanner
            style={{
              backgroundImage: `url(${movie?.backdrop_path ? `${baseImg}${movie?.backdrop_path}` : "Another Image Link"})`,
            }}>

            <BannerContent>
              <h1>
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
            </BannerContent>
          </ContainerBanner>
        </Link>
      )}
        <ContainerMovies>
           <ListMovie />
        </ContainerMovies>
    </Container>
  );
}

