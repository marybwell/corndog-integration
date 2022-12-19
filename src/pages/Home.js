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

        <div className="container pre-footer">
          <h2>MORE THAN ONE MILLION MOVIES AND <br/> TV SERIES RIGHT HERE FOR YOU</h2>
          <h3>ONLY OFFERED ON</h3>
          <img className="logo" src="../images/logocorndog.png" alt="logo" />
          
        </div>
      </div>
    </>
  );
};

export default Home;
