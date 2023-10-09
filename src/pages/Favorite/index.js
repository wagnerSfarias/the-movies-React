import React, { useEffect, useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { baseImg } from '../../services/api';
import { ContainerFavorite, ContainerMovie } from './styles'
import { getMoviesSave, deleteMovie } from '../../utils/localStorage';
import ButtonBack from '../../components/ButtonBack';
import { Container, ContainerIcon } from '../Detail/styles';

export default function Favorite() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(getMoviesSave('@movies'))
    }, [])

    function handleDelete(id) {
        setMovies(deleteMovie(id))
    }

    return (
        <ContainerFavorite>
             <ButtonBack/>
            <Container>
                <h1> Meus Filmes Favoritos</h1>
                {movies.map((movie) => {
                    return (
                        <ContainerMovie key={movie.id}>
                            <img
                                src={movie.poster_path ? `${baseImg}${movie.poster_path}` : 'null'}
                                alt={movie.name} />
                            <div>
                                <p>{movie.title}</p>
                                <ContainerIcon onClick={() => handleDelete(movie.id)}>
                                        <FaBookmark/>
                                </ContainerIcon>
                            </div>
                        </ContainerMovie>
                    )
                })}
            </Container>
        </ContainerFavorite>
    );
}