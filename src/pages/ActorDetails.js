import React, { useState, useEffect } from "react";
import axios from "axios";
import Actor from "../components/Actor";
import { useHistory } from "react-router-dom";

const MovieDetails = (props) => {

    const id = props.location.state.id;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US`;
    const URL_CREDITS = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US`
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
            <div className="container details-container">
                <div className="movie_card" id="bright">
                    <div className="info_section">
                        <div className="movie_header">
                            <img
                                className="locandina"
                                src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
                                alt="poster"
                            />
                            <h1>{detail.title}</h1>
                            <h4>{detail.release_date}</h4>
                            <span className="minutes">{detail.runtime} min</span>
                            {genres.map((g) => {
                                return (
                                    <p
                                        key={g.id}
                                        className="type"
                                        onClick={() => history.push('/categories', { id: g.id })}>
                                        {g.name}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="movie_desc">
                            <p className="text">{detail.overview}</p>
                        </div>
                        <p className="textActor">Acteurs ayant joué dans ce film</p>
                        <ul className="actors_desc">
                            {credits
                                .slice(0, 6)
                                .map(credit => {
                                    return (
                                        <Actor
                                            actor={credit}
                                            key={credit.id}
                                            onClickActor={() => history.push("/actorDetails", { id: credit.id })} />
                                    );
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MovieDetails;