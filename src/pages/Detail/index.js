import React, { useState, useEffect } from 'react';
import './index.css';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import BannerDetail from '../../components/BannerDetail';
import ListActors from '../../components/ListActors';
import { useHorizontalScroll } from '../../utils/scrollHorizontal';
import { FaYoutube, FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { getTime } from '../../utils/time';
import { hasMovie, saveMovie } from '../../utils/localStorage';
import ButtonBack from '../../components/ButtonBack';


export default function Detail() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState('');
  const [genres, setGenres] = useState([]);
  const [favorite, setFavorite] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const scrollActors = useHorizontalScroll();

  useEffect(() => {
    async function loadDetail() {
      window.scrollTo(0, 0);

      await api.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
        .then((response) => {
          const date = new Date(response.data.release_date).toLocaleDateString('pt-BR');

          setGenres(response.data.genres);
          let time = getTime(response.data.runtime);
          setTime(time);
          setDate(date);
          setData(response.data);

          const isFavorite = hasMovie(response.data)

          setFavorite(isFavorite);

        }).catch((err) => {
          // console.log('eroor', err)
          setLoading(false)
          return;
        })
    }

    loadDetail();

  }, [id])

  function handleSave() {
    saveMovie('@movies', data)
    navigate('/', { replace: true })
  }


  return (<>
    {loading ? (
      <div className='container-detail'>

        <BannerDetail data={data} />

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
      </div>) : (

      <div className='container-detail'>
        <ButtonBack />
        <h1 className='warn-skeleton'>Os detalhes do filme, não foram encontrados !</h1>
        <div className='container-skeleton'>
          <div className='title-skeleton'></div>
          <div className='sinopse-skeleton'></div>
        </div>
      </div>
    )}

  </>
  );
}