import React from "react";
import "./app.css";

import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <main className="main">
        <MovieList movieType="popular" title="Popular"/>
        <MovieList movieType="top_rated" title="Top Rated"/>
        <MovieList movieType="upcoming" title="UpComing"/>
      </main>
    </div>
  );
};

export default App;
// https://api.themoviedb.org/3/movie/popular?api_key=0b58cb74baec290e316bfc391754c596