import React, { useState, useEffect } from 'react';
import {
   ContainerDetail,
   Container,
   ContainerTitle,
   Sinopse,
   Description,
   Trailer,
   ContainerIcon,
   ContainerGenres,
   Genres,
   RowActors,
   ContainerSkeleton,
   WarnSkeleton,
   TitleSkeleton,
   SinopseSkeleton
  } from './styles';

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
      <ContainerDetail>

        <BannerDetail data={data} />

        <Container>

          <ContainerTitle>
            <h1> {data?.title}</h1>
            <ContainerIcon onClick={handleSave}>

              {favorite ? (<FaBookmark />) : (
                <FaRegBookmark />
              )}

            </ContainerIcon>
          </ContainerTitle>

          <Sinopse> {data?.overview}</Sinopse>
          <Description>
            <div>
              <p>Lançado: {date}</p>
              <p>Duração: {time}</p>
            </div>


            <a target='blank' href={`https://youtube.com/results?search_query=${data.title} Trailer`}>

              <Trailer>
                <p >Trailer</p>
                <FaYoutube/>
              </Trailer>

            </a>

          </Description>

          <ContainerGenres>
            {genres.map(genres => {
              return (
                <Genres key={genres.id}>
                  <p>{genres.name}</p>
                </Genres>
              )
            })
            }
          </ContainerGenres>

          <h1> Atores</h1>

          <RowActors ref={scrollActors}>
            <ListActors data={id} />
          </RowActors>
        </Container>
      </ContainerDetail>) : (

      <ContainerDetail>
        <ButtonBack />
        <WarnSkeleton>Os detalhes do filme, não foram encontrados !</WarnSkeleton>
        <ContainerSkeleton>
          <TitleSkeleton></TitleSkeleton>
          <SinopseSkeleton></SinopseSkeleton>
        </ContainerSkeleton>
      </ContainerDetail>
    )}

  </>
  );
}