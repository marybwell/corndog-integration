import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useHistory } from 'react-router-dom';

const CategoriesMovies = (props) => {

    const { idGenre } = props;
    const history = useHistory();
    const [data, setData] = useState([]);
    const [id, setId] = useState();
    const [categories, setCategories] = useState([]);

    const idParam = idGenre ? idGenre : id;

    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US&page=1&with_genres=${idParam}`;
    const URL_GENRES = "https://api.themoviedb.org/3/genre/movie/list?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US";

    useEffect(() => {
        axios.get(URL).then((res) => {
            setData(res.data.results);
        });
        axios.get(URL_GENRES).then((res) => {
            setCategories(res.data.genres);
        });

    }, [URL, idParam]);

    const onClick = (e) => {
        setId(e.target.value);
    }


    return (
        <div className="categoriesMovies">
            {!idGenre && (
                <div className="sort-container">
                    <li value={id} onClick={onClick}>
                        {categories.map(genre => {
                            return <ul value={genre.id}><button value={genre.id}>{genre.name}</button></ul>
                        })}
                    </li>
                </div>)}

            {idParam ? (
                <ul className="categoriesMovies-list">
                    {data.map((movie) => (
                        <Movie movie={movie} key={movie.id} onClickMovie={() => history.push('/movieDetails', { id: movie.id })} />
                    ))}
                </ul>
            ) : (
                <div className="placeholder-container">
                    <h4>Select category</h4>
                </div>
            )}
        </div>
    )
}

export default CategoriesMovies;