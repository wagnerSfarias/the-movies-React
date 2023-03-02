import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { baseImg } from '../../services/api';
import './index.css';
import { getListMovies } from '../../utils/movie';

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

      {person?.map((per, index) => {
        return (
          <div className='container-actors' key={index}>
            {per.profile_path === null ?
              (<img className='img-actor'
                src={'https://letrasjuridicas.com.br/product_images/AuthorDefaultImage.png'}
                alt={per?.name}
              />) : (
                <img className='img-actor'
                  src={`${baseImg}${per?.profile_path}`}
                  alt={per?.name}
                  key={index} />
              )}
            <p className='name-actor' key={per.id} >{per?.name}</p>
            <p className='character'>{per?.character}</p>
          </div>
        )
      })}
    </>

  );
}