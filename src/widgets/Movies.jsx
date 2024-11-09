import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function Movies(props) {
    const [movies, setMovies] = useState(null);
    
    useEffect(() => {
        const MoviesApi = async () => {
            const options = {
                method: 'GET',
                url: 'https://imdb-com.p.rapidapi.com/search',
                params: { 
                    searchTerm: props.name,
                    type: props.type
                 },
                headers: {
                    'x-rapidapi-key': '799faed7b4msh4e094a11e606f1cp17f7e5jsn867150e7cb30',
                    'x-rapidapi-host': 'imdb-com.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                setMovies(response.data.data.mainSearch.edges);
            } catch (error) {
                console.error(error);
            }
        }
        MoviesApi();
    }, []);
    return (
        <div className="pl-5 ">
            <h1 className='ml-2 text-3xl font-bold'>{props.title} List</h1>
            <div className='flex justify-center'>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={1}
                    freeMode={true}
                    pagination={false}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        1200: {
                            slidesPerView: 6,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        400: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {movies?.map((movie) => (
                        <SwiperSlide key={movie.node.entity.id}>
                            <div className='rounded-2xl  transform transition-transform duration-500 hover:scale-105 h-[340px] mt-10'>
                                <MovieCard
                                    Poster_Link={movie?.node.entity.primaryImage?.url}
                                    Series_Title={movie?.node.entity.originalTitleText.text}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Movies;