import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = (props) => {
  const { movies } = props;
  const history = useHistory();

  return (
    <Swiper slidesPerView={1} pagination={true} modules={[Pagination]}>
      {movies.map((movie, index) => {
        return (
          <SwiperSlide>
            <div className="movie" key={movie.id}>
              <img className="hero"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="poster"
              />
              <div className="movie-container">
                <h2>{movie.title}</h2>
                <div className="rating">
                  <b>rating |</b>
                  <img className="emoiles" src="./images/emoiles.png" alt="emoiles" />
                </div>
                <b>Release date | {movie.release_date}</b>

                <p> {movie.overview}</p>
                <button
                  onClick={() =>
                    history.push("/movieDetails", { id: movie.id })
                  }
                >
                  WATCH NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
