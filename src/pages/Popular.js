import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PopularMovies from "../components/PopularMovies";

const Popular = () => {
    return (
        <div className="container">         
            <PopularMovies />
        </div>
    )
}

export default Popular;