import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Actor from "../components/Actor";
import { useHistory } from "react-router-dom";

const MovieDetails = (props) => {
  const id = props.location.state.id;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US`;
  const URL_CREDITS = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US`;
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [credits, setCredits] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(URL).then((res) => {
      setDetail(res.data);
      setGenres(res.data.genres);
    });
    axios.get(URL_CREDITS).then((res) => {
      setCredits(res.data.cast);
    });
  }, [URL, URL_CREDITS]);

  return (
    <React.Fragment>
      <div className="container-moviedetails">
        <div className="stats">
          <h1>{detail.title}</h1>
          <p>
            {detail.release_date} | {detail.runtime} min{" "}
          </p>
        </div>

        <div className="moviedetails">
          <img
            className="affiche"
            src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
            alt="poster"
          />
          <iframe
            width="1268"
            src="https://www.youtube.com/embed/ptHA9mBHgO8"
            title="I Survived Country's Oldest vs Newest Gym!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="genres">
          {genres.map((g) => {
            return (
              <div>
                <a key={g.id} className="type">
                  <button>{g.name}</button>
                </a>
              </div>
            );
          })}
          <div>
            <p>Rating : {detail.vote_average}</p>
          </div>
        </div>

        <div className="synopsis">
          <h2>Synopsis</h2>
          {detail.overview}
          <hr />
        </div>

        <div>
          <div className="actors">
            <h2>Actors</h2>
          </div>

          <ul className="actors">
            {credits.slice(0, 5).map((credit) => {
              return (
                <Actor
                  actor={credit}
                  key={credit.id}
                  onClickActor={() =>
                    history.push("/actorDetails", { id: credit.id })
                  }
                />
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieDetails;
