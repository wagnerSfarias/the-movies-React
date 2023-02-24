import React, { useState, useEffect } from 'react';
import './index.css';
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
      if(isActive) {
        const data = response.data?.results;
        const random = Math.floor(Math.random() * data.length)
        
        setMovie(data[random]);
        setLoading(false);
      }

    }
    loadMovie();

    return () => {
      isActive = false;
    }
  }, [])


  return (
    <div className='container-home'>
      <HeaderHome />
      {loading ? (
        <div className='header-skeleton'>
          <div className='banner-content-skeleton'>
            <div className='banner-title-skeleton'></div>
          </div>
        </div>
      ) : (

        <Link  to={`/detail/${movie.id}`}>
        <div className='header'
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${movie?.backdrop_path ? `${baseImg}${movie?.backdrop_path}` : "Another Image Link"})`,
            backgroundPosition: 'center-center'
          }}
        >

          <div className='banner-content'>
            <h1 className='banner-title'>
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
          </div>

        </div>
        </Link>
      )}

          <ListMovie/>

    </div>
  );
}

