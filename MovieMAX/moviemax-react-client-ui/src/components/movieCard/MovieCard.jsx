import React from 'react'
import './MovieCard.css'
const MovieCard = ({movieInfo}) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movieInfo.id}`} className='movie-card'>
        <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt='poster' className='movie-poster'/>

        <div className="movie-details">
            <h3 className="movie-details-heading">{movieInfo.original_title}</h3>
            <div className="align-center-class movie-release-date">
               <p>{movieInfo.release_date}</p>
               <p>{movieInfo.vote_average.toFixed(1) + '⭐'}</p>
            </div>
            <p className="movie-description">
                {movieInfo.overview.slice(0,100)+'...'}
            </p>
        </div>
    </a>
  )
}

export default MovieCard