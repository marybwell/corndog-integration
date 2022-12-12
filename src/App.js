import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import MovieDetails from "./pages/MovieDetails";
import ActorDetails from "./pages/ActorDetails";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      
      <Switch>
        <Route path="/" exact component={Popular} />
        <Route path="/search" exact component={Search} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/movieDetails" exact component={MovieDetails} />
        <Route path="/actorDetails" exact component={ActorDetails} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;