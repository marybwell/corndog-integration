import React, { useState, useEffect } from "react";
import axios from "axios";
import Actor from "../components/Actor";
import { useHistory } from "react-router-dom";
import Recommandations from "../components/Recommandations";

const MovieDetails = (props) => {
  const id = props.location.state.id;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US`;
  const URL_CREDITS = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US`;
  const URL_VIDEO = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
  const [video, setVideo] = useState([]);
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [credits, setCredits] = useState([]);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0,0);

    axios.get(URL).then((res) => {
      setDetail(res.data);
      setGenres(res.data.genres);
    });
    axios.get(URL_CREDITS).then((res) => {
      setCredits(res.data.cast);
    });
    axios.get(URL_VIDEO).then((res) => {
      const findTeaser = res.data.results.find(
        (item) => item.type === "Trailer"
      );
      setVideo(findTeaser);
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
            src={`https://www.youtube.com/embed/${video.key}`}
            allow="fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="genres">
          <div>
            {genres.map((g) => {
              return (
                <button onClick={() => { history.push('/categories', { id: g.id }) }} key={g.id} className="type">
                  <span>{g.name}</span>
                </button>
              );
            })}
          </div>
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
        <div className="container recommandations">
          <h3>Recommandations</h3>
          <Recommandations />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieDetails;
