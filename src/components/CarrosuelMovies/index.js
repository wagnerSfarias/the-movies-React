import React from 'react';
import { SubTitle, BtnMovie, SubTitleSkeleton, MovieCardSkeleton } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { baseImg } from '../../services/api';

import 'swiper/css';

export default function CarrosuelMovies({ loading, title, data }) {
    return (
        <>
            {loading ? (
                <>
                    <SubTitleSkeleton></SubTitleSkeleton>
                    <Swiper
                        grabCursor
                        breakpoints={{
                            375: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            560: {
                                slidesPerView: 3
                            },
                            840: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                            1250: {
                                slidesPerView: 6
                            }
                        }} >

                        {Array(10).fill().map((data, index) => (
                            <SwiperSlide key={index}>
                                <BtnMovie to={'/'}>
                                    <MovieCardSkeleton key={index}></MovieCardSkeleton>
                                </BtnMovie>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                </>
            ) : (
                <>
                    <SubTitle>{title}</SubTitle>
                    <Swiper
                        grabCursor
                        breakpoints={{
                            375: {
                                slidesPerView: 2
                            },
                            560: {
                                slidesPerView: 3
                            },
                            840: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                            1250: {
                                slidesPerView: 6
                            }
                        }}>

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
                </>
            )}
        </>
    );
}