import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import "swiper/css";
import "swiper/css/navigation";

const PopularMovies = () => {
  const [popular, setPopular] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US&page=1"
      )
      .then((res) => setPopular(res.data.results));
  }, []);

  return (
    <div className="popularMovies">
      <h1>Popular Movies</h1>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={20}
      >
        {popular.map((movie, index) => {
          return (
            <SwiperSlide>
              <div className="movie" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt="poster"
                />
                <div className="container">
                  <h2>{movie.title}</h2>
                  <p>Release date: {movie.release_date}</p>
                  <p>Vote average: {movie.vote_average}</p>
                  <button 
                    onClick={() =>
                      history.push("/movieDetails", { id: movie.id })
                    }
                  >
                    <FontAwesomeIcon icon={faPlay} />  PLAY NOW
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularMovies;
