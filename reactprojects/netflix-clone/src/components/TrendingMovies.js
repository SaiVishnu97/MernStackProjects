import React, { useState } from 'react'
import Axios from "axios"
import "../Styling/trendingmovies.css"

function TrendingMovies() {

    const [myTrendingMovies,setTrendingMovies] =  useState([]);
    Axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=cacc3cf3641c31db9b69c833c96803c8")
    .then(output=>setTrendingMovies(output.data.results)).catch(error=>console.log(error))

  return (
    <><h2 style={{color: "white", fontSize: "20px", fontWeight: "900", marginLeft:"30px"}}>TRENDING MOVIES</h2>
    <div className="main-content">
    {myTrendingMovies.map(movie=><img className="movie-poster" src={"https://image.tmdb.org/t/p/original"+movie.poster_path}/>)}    </div>
  </>
    )
}

export default TrendingMovies