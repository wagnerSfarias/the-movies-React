import React from 'react';
import { Carosuel, SubTitle, BtnMovie, SubTitleSkeleton, MovieCardSkeleton } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { baseImg } from '../../services/api';

export default function CarrosuelMovies({ loading, title, data }) {
    return (
        <>
            {loading ? (
                <>
                    <SubTitleSkeleton></SubTitleSkeleton>
                    <Carosuel>
                        <Swiper
                            grabCursor
                            slidesPerView={'auto'}
                            spaceBetween={10} >

                            {Array(10).fill().map((data, index) => (
                                <SwiperSlide key={index}>
                                    <BtnMovie to={'/'}>
                                        <MovieCardSkeleton key={index}></MovieCardSkeleton>
                                    </BtnMovie>
                                </SwiperSlide>
                            )
                            )}
                        </Swiper>
                    </Carosuel>
                </>
            ) : (
                <>
                    <SubTitle>{title}</SubTitle>
                    <Carosuel>
                        <Swiper
                            grabCursor
                            slidesPerView={'auto'}
                            spaceBetween={10}>
                                
                            {data?.map(movie =>
                            (
                                <SwiperSlide key={movie.id}>
                                    <BtnMovie to={`/detail/${movie.id}`}>
                                        <img src={movie.poster_path ? `${baseImg}${movie.poster_path}` : 'null'}
                                            alt={movie.name} />
                                    </BtnMovie>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Carosuel>
                </>
            )}
        </>
    );
}