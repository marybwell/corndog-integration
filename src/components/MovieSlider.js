import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const MovieSlider = (props) => {
  const { movies } = props;
  const history = useHistory();

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={3}
      spaceBetween={20}
    >
      {movies.map((movie, index) => {
        return (
          <>
          {movie.backdrop_path !== null && <SwiperSlide>
            <div className="movie" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="poster"
              />
              <div className="movie-container">
                <h2>{movie.title}</h2>
                <p>Release date: {movie.release_date}</p>
                <p>Vote average: {movie.vote_average}</p>
                <button
                  onClick={() =>
                    history.push('/movieDetails', { id: movie.id })
                  }
                >
                  <FontAwesomeIcon icon={faPlay} /> PLAY NOW
                </button>
              </div>
            </div>
          </SwiperSlide>}
          </>
        );
      })}
    </Swiper>
  );
};

export default MovieSlider;
