import React, { useEffect , useState}  from 'react'
import axios from 'axios'
import _ from 'lodash'

import MovieCard from '../movieCard/MovieCard'
import FilterList from '../FilterList/FilterList'
import "./MovieList.css"

const MovieList = ({movieType,title}) => {
    const [movies,setMovies] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [filterMovies, setFilterMovies] = useState([]);
    const [sort, setSort] = useState({
        by : 'default',
        order : 'asc'
    })

    const URL = `https://api.themoviedb.org/3/movie/${movieType}?api_key=0b58cb74baec290e316bfc391754c596`;

    const fetchMovies = async () => {
        try {
            const response = await axios.get(URL);
            setMovies(response.data.results);
            setFilterMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
         fetchMovies();
    },[])

    useEffect(() => {
        if(sort.by !== "default"){
            const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order])
            setFilterMovies(sortedMovies);
        }

    },[sort])
    
    const handleFilter = (rate) => {
        if(rate === minRating){
            setMinRating(0);
            setFilterMovies(movies);
        }
        else{
            setMinRating(rate);

            const filtered = movies.filter((movie) => (movie.vote_average >= rate));
            setFilterMovies(filtered);
        }
    }

    const handleSort = (e) => {
       const {name,value} = e.target;
       setSort((prev) => ({...prev, [name]:value}))
    //    console.log("e", e);  write sorting logic outside function(after exctution of function)
    }

    // console.log(sort);
    
  return (
    <section className="movie-list" id={movieType}>
        <header className='align-center-class movie-list-header'>
            <h2 className="align-center-class movie-list-heading">{title}</h2>
            
            <div className="align-center-class movie-list-filter-sorting">
                
                <FilterList  minRating={minRating} onRatingClick={handleFilter} ratings={[7,6,5]}/>

                <select name="by" 
                 onChange={handleSort} value={sort.by}
                 className="movie-sorting">
                    <option value="default">SORT BY</option>
                    <option value="release_date">DATE</option>
                    <option value="vote_average">RATING</option>
                </select>

                <select name="order" 
                 onChange={handleSort} value={sort.order}
                 className="movie-sorting">
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
        </header>
        <div className="movie-cards">
            {
                // movies.map((movie) => (<MovieCard key={movie.id} movieInfo={movie}/>))
                filterMovies.map((movie) => (<MovieCard key={movie.id} movieInfo={movie}/>))
            }
        </div>
    </section>
  )
}

export default MovieList