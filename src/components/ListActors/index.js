import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { baseImg } from '../../services/api';
import { ContainerActors, NameActor } from './styles';
import { getListMovies } from '../../utils/movie';
import { Swiper, SwiperSlide } from 'swiper/react';
import User from '../../assets/user.svg'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


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
    <>
      <Swiper
        grabCursor
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          280: {
            slidesPerView: 2
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          800: {
            slidesPerView: 4,
          }
        }}>

        {person?.map((per, index) => (
          <SwiperSlide key={index}>
            <ContainerActors>
              {per.profile_path === null ?
                (<img src={User} alt={per?.name}/>
                ) : (
                  <img
                    src={`${baseImg}${per?.profile_path}`}
                    alt={per?.name} />
                )}
              <NameActor key={per.id} >{per?.name}</NameActor>
              <p>{per?.character}</p>
            </ContainerActors>
          </SwiperSlide>
        )
        )}
      </Swiper>
    </>
  );
}