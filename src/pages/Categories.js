import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoriesMovies from "../components/CategoriesMovies";

const Categories = () => {
    return (
        <div className="categories">
            <Logo />
            <Navigation />
            <CategoriesMovies />
            <Footer />
        </div>
    )
}

export default Categories;