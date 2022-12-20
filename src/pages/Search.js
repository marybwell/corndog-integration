import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const query = props.location.state?.q || "";

  const baseUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US&query=";

  useEffect(() => {
    axios.get(baseUrl + query).then((res) => {
      setData(res.data.results);
    });
  }, [props]);

  return (
    <div className="container">
      <div className="categoriesMovies">
        {data.length ? (
          <ul className="categoriesMovies-list">
            {data.map((movie) => (
              <>
                {movie.backdrop_path && (
                  <div
                    className="movie"
                    onClick={() =>
                      history.push("/movieDetails", { id: movie.id })
                    }
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt="poster"
                    />
                    <div className="movie-container">
                      <div>
                        <h2>{movie.title}</h2>
                        <p>Release date: {movie.release_date}</p>
                      </div>

                      <button>PLAY NOW</button>
                    </div>
                  </div>
                )}
              </>
            ))}
          </ul>
        ) : (
          <div className="placeholder-container">
            <h4>No results</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
