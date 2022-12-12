import React from "react";
import PopularMovies from "../components/PopularMovies";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Popular = () => {
    return (
        <div className="container">         
            <PopularMovies />
        </div>
    )
}

export default Popular;