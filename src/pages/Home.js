import React from "react";
import PopularMovies from "../components/PopularMovies";
import TrendingMovies from "../components/TrendingMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import NowPlaying from "../components/NowPlaying";
import SimilarMovies from "../components/SimilarMovies";

const Home = () => {
  return (
    <div className="container">
      <PopularMovies />
      <SimilarMovies />
      <TrendingMovies />
      <TopRatedMovies />
      <UpcomingMovies />
      <NowPlaying />
    </div>
  );
};

export default Home;
