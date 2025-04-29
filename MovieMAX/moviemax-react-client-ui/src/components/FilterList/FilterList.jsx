import React from 'react'

const FilterList = ({minRating, onRatingClick, ratings}) => {
  return (
    <ul className="align-center-class movie-filter">
        {
            ratings.map((rate)=>(
                <li key={rate} className={minRating === rate ? "movie-filter-item active" : "movie-filter-item"} onClick={() => onRatingClick(rate)}><span className="rating">{rate} + <span class="star">⭐</span></span></li>
            ))
        }
        </ul>
  )
}

export default FilterList

{/* <li className={minRating === 6 ? "movie-filter-item active" : "movie-filter-item"} onClick={() => onRatingClick(6)}><span class="rating">6+ <span class="star">⭐</span></span></li> */}
{/* <li className={minRating === 5 ? "movie-filter-item active" : "movie-filter-item"} onClick={() => onRatingClick(5)}><span class="rating">5+ <span class="star">⭐</span></span></li> */}