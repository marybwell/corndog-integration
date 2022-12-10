import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { useHistory } from 'react-router-dom';

const SearchMovie = () => {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US&query=${query}`;

    useEffect(() => {
        axios.get(URL).then((res) => {
            setData(res.data.results)
        });
    }, [URL, query]);
    //pas fetché qu'une fois - donc query dans le tableau d'injection+URL - chaque fois unchange sur input avec fonction onSearch

    const onSearch = (event) => {
        setQuery(event.target.value);
    }
    //fonction sur changement de valeur précisée par user - met la valeur dans query via setquery par (event.target.value)
    return (
        <div className='searchMovie'>
            <div className='input-container'>
                <input
                    className='input'
                    placeholder='Search'
                    onChange={onSearch}
                ></input>
            </div>
            {query ? (
                <ul className='searchMovie-list'>
                    {data.map((movie) => (
                        <Movie movie={movie} key={movie.id} onClickMovie={() => history.push('/movieDetails', { id: movie.id })} />
                    ))}
                </ul>
            ) : (
                <div className='placeholder-container'>
                    <h4>No results</h4>
                </div>
            )}
        </div>
    )
}
//composant props movie.js- {data.map((movie) -- création de key pour chaque données pour gérer et lier un film de manière unique
// la condition --> backend : ternaire - {query ? (...) : (h4) } et le résultat --> frontend



export default SearchMovie;