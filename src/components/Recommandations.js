import React from "react";
import MovieSlider from "./MovieSlider";

const Recommandations = () => {
  const mesFilms = [

    
    {
      title: "Pulp Fiction",
      backdrop_path:
        "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      release_date: "1994-09-10",
      vote_average: "8.491",
      overview:
        "A burger-loving hit man, his philosophical partner, a drug-addled gangster`s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    },
    {
      title: "Citizen Kane",
      backdrop_path:
        "/3Ne0EpyuhZkIbfSyDzzMaNkb7Z7.jpg",
      release_date: "1941-04-17",
      vote_average: "8.029",
      overview:
        "Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.",
    },
    {
      title: "Rambo III",
      backdrop_path:
        "/nEuPSz6LhmrtYp7K56dbsmomuqA.jpg",
      release_date: "1988-05-24",
      vote_average: "6.148",
      overview:
        "Combat has taken its toll on Rambo, but he's finally begun to find inner peace in a monastery. When Rambo's friend and mentor Col. Trautman asks for his help on a top secret mission to Afghanistan, Rambo declines but must reconsider when Trautman is captured.",
    },
    {
      title: "2001: A Space Odyssey",
      backdrop_path:
        "/kCEXA22ASuq7Y29jnngyaisyA0X.jpg",
      release_date: "1968-04-02",
      vote_average: "8.079",
      overview:
        "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
    },
    {
      title: "Taxi Driver",
      backdrop_path:
        "/a58oc5qGNazb3QOxEH8eG5S7gjr.jpg",
      release_date: "1976-02-09",
      vote_average: "8.17",
      overview:
        "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feed his urge for violent action.",
    },
  ];

  
  return (
    <div className="slider">
      <MovieSlider movies={mesFilms} />
    </div>
  );
};

export default Recommandations;