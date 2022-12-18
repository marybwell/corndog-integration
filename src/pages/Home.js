import React from "react";
import PopularMovies from "../components/PopularMovies";
import TrendingMovies from "../components/TrendingMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import NowPlaying from "../components/NowPlaying";
import SimilarMovies from "../components/SimilarMovies";
import HeroMovies from "../components/HeroMovies";
import FicheActeur from "../components/FicheActeur";
import HomeCategories from "../components/HomeCategories";

const Home = () => {
  return (
    <>
      <HeroMovies />
      <div className="container">
        <PopularMovies />
        <SimilarMovies />
        <TrendingMovies />
        <TopRatedMovies />
        <UpcomingMovies />
        <NowPlaying />
        <FicheActeur />
        <HomeCategories />  
      </div>
    </>
  );
};

export default Home;
