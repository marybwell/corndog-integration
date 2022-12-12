import React from 'react';

const Movie = (props) => {
    const { movie, onClickMovie } = props;

    //FRONT - concaténer url avec la valeur de l'attribut ${movie.poster_path}
    return (
        
        <div className='movie' onClick={onClickMovie}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
            <div className='conteneur'>
                <li>{movie.title}</li>
            </div>
        </div>
    )
}

export default Movie;