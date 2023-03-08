import React, { useState, useEffect } from 'react';
import './index.css';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import BannerHome from '../../components/BannerHome';
import ListActors from '../../components/ListActors';
import { useHorizontalScroll } from '../../utils/scrollHorizontal';
import { FaYoutube, FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { getTime } from '../../utils/time';
import { hasMovie, saveMovie } from '../../utils/localStorage';


export default function Detail() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [genres, setGenres] = useState([]);
  const [favorite, setFavorite] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const scrollActors = useHorizontalScroll();

  useEffect(() => {
    async function loadDetail() {
      window.scrollTo(0, 0);

      const response = await api.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
      const date = new Date(response.data.release_date).toLocaleDateString('pt-BR');

      setGenres(response.data.genres);
      let time = getTime(response.data.runtime);
      setTime(time);
      setDate(date);
      setData(response.data);

      const isFavorite = hasMovie(response.data)

      setFavorite(isFavorite);
    }

    loadDetail();

  }, [id])

  function handleSave() {
    saveMovie('@movies', data)
    navigate('/', { replace: true })
  }


  return (

    <div className='container-detail'>

      <BannerHome data={data} />

      <div className='container'>

        <div className='container-title'>
          <h1> {data?.title}</h1>
          <div className='container-icon' onClick={handleSave}>

            {favorite ? (<FaBookmark className='svg-save' />) : (
              <FaRegBookmark className='svg-save' />
            )}

          </div>
        </div>

        <p className='sinopse'> {data?.overview}</p>
        <div className='container-description'>
          <div>
            <p>Lançado: {date}</p>
            <p>Duração: {time}</p>
          </div>


          <a target='blank' href={`https://youtube.com/results?search_query=${data.title} Trailer`}>

            <div className='trailer'>

              <p >Trailer</p>
              <FaYoutube size={40} className='icon' />
            </div>

          </a>

        </div>

        <div className='container-genres'>
          {genres.map(genres => {
            return (
              <div className='genres' key={genres.id}>
                <p>{genres.name}</p>
              </div>
            )
          })
          }
        </div>

        <h1> Atores</h1>

        <div className='row-actors' ref={scrollActors}>
          <ListActors data={id} />
        </div>
      </div>
    </div>
  );
}