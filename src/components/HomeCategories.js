import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieSlider from "./MovieSlider";

const HomeCategories = () => {
  const [movies, setMovies] = useState([]);

  const [scienceFiction, setScienceFiction] = useState([]);
  const [thriller, setThriller] = useState([]);
  const [horror, setHorror] = useState([]);

  const URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US&page=1&with_genres=";

  useEffect(() => {
    axios.get(URL + "878").then((res) => setScienceFiction(res.data.results));

    axios.get(URL + "53").then((res) => setThriller(res.data.results));

    axios.get(URL + "27").then((res) => {
      setHorror(res.data.results);
    });
  }, []);

  return (
    <>
      <div className="slider">
        <h1>Science Fiction</h1>
        <MovieSlider movies={scienceFiction} />
      </div>

      <div className="slider">
        <h1>Thriller</h1>
        <MovieSlider movies={thriller} />
      </div>

      <div className="slider">
        <h1>Horror</h1>
        <MovieSlider movies={horror} />
      </div>
    </>
  );
};

export default HomeCategories;
