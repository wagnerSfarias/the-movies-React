import React, { useEffect, useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { baseImg } from '../../services/api';
import './index.css';
import { getMoviesSave, deleteMovie } from '../../utils/localStorage';

export default function Favorite() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        setMovies(getMoviesSave('@movies'))

    }, [])

    function handleDelete(id) {
        setMovies(deleteMovie(id))
    }

    return (

        <div className='container-favorite'>
            <div className='container'>
                <h1> Meus Filmes Favoritos</h1>
                {movies.map((movie) => {
                    return (
                        <div key={movie.id} className='container-movie'>

                            <img
                                src={movie.poster_path ? `${baseImg}${movie.poster_path}` : 'null'}
                                alt={movie.name} />
                            <div>
                                <p>{movie.title}</p>
                                <div className='container-icon' onClick={() => handleDelete(movie.id)}>
                                    <div className='icon-save'>
                                        <FaBookmark className='svg-save' /></div>
                                </div>
                            </div>

                        </div>
                    )
                })}


            </div>

        </div>

    );
}