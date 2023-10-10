import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { baseImg } from '../../services/api';
import { Carosuel, ContainerActors, NameActor } from './styles';
import { getListMovies } from '../../utils/movie';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function ListActors({ data }) {
  const [person, setPerson] = useState(false);

  useEffect(() => {
    async function loadDetail() {

      const response = await api.get(`/movie/${data}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
      const size = Object.keys(response.data.cast).length;
      const actors = getListMovies(size, response.data.cast);
      setPerson(actors);
    }

    loadDetail();

  }, [data])

  if (!person) {
    return (
      <div></div>
    )
  }

  return (

      <Carosuel>
        <Swiper
          grabCursor
          slidesPerView={'auto'}
          spaceBetween={2} >

          {person?.map((per, index) => (
            <SwiperSlide key={index}>
              <ContainerActors>
                {per.profile_path === null ?
                  (<img
                    src={'https://letrasjuridicas.com.br/product_images/AuthorDefaultImage.png'}
                    alt={per?.name}
                  />) : (
                    <img
                      src={`${baseImg}${per?.profile_path}`}
                      alt={per?.name}
                      key={index} />
                  )}
                <NameActor key={per.id} >{per?.name}</NameActor>
                <p>{per?.character}</p>
              </ContainerActors>
            </SwiperSlide>
          )
          )}
        </Swiper>
      </Carosuel>
  
  );
}