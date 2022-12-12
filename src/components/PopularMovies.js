import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { useHistory } from 'react-router-dom';




const PopularMovies = () => {
    //BACKEND
    const [popular, setPopular] = useState([]);
    const history = useHistory();
    //acces popular movie tableau valeur de la clé results - URL fetch - synchronisé pour récupérer les données
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US&page=1").then((res) => setPopular(res.data.results));
    }, []);
    //tableau d'injection vide - GET lancé une seul fois - par res.data.results

    //FRONT - concept props .map -image et nom =affichage sophistiquée - Movie.js/PopularMovies.js/Popular.js/App.js 20 films
    //https://reactjs.org/docs/lists-and-keys.html
    return (
        <div className='popularMovies'>
            {popular.map((m, index) => {
                if (index === 0) {
                    return <div id='testloulou'> <Movie movie={m} key={m.id} onClickMovie={() => history.push('/movieDetails', { id: m.id })} /></div>;
                }
                return  <Movie movie={m} key={m.id} onClickMovie={() => history.push('/movieDetails', { id: m.id })} />;
            })}
        </div>
    )
}

export default PopularMovies;