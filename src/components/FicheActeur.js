import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieSlider from "./MovieSlider";

const FicheActeur = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/206919/movie_credits?api_key=dd16b2077fe0c80a7afd06bad08612c2&language=en-US"
      )
      .then((res) => setMovies(res.data.cast));
  }, []);

  return (
    <>
      <div className="ficheacteur">
        <img src="./images/daniel.webp" alt="daniel" />
        <div className="text">
          <h3>ACTOR OF THE MONTH</h3>
          <h2>Daniel KALUUYA</h2>
          <p>33 years old British Actor</p>
        </div>
      </div>
      <div className="slider">
        <h1>His most recent films</h1>
        <MovieSlider movies={movies} />
      </div>
      <hr />
    </>
  );
};

export default FicheActeur;
