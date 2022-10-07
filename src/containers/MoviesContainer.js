import { useState, useEffect } from "react";

import MoviesList from "../components/MoviesList";
import MovieDetail from "../components/MovieDetail";
import VisitedMoviesList from "../components/VisitedMoviesList";

const MoviesContainer = () => {

    const [movies, setMovies] = useState([]);
    const [quotes, setQuotes] = useState([]);
    const [visitedMovies, setVisitedMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchMovies = async () => {
        
        const response = await fetch("https://movie-quote-api.herokuapp.com/v1/shows/");
        const jsonMovies = await response.json();

        setMovies(jsonMovies);
    }

    const fetchQuotes = async () => {
        
        const response = await fetch(`https://movie-quote-api.herokuapp.com/v1/shows/${selectedMovie.slug}`);
        const jsonQuotes = await response.json();

        setQuotes(jsonQuotes);
    }


    useEffect(() => {
        fetchMovies();     
    }, [])

    useEffect(() => {
        fetchQuotes();
    }, [selectedMovie])

    const addVisitedMovie= (movie) => {
        if(visitedMovies.includes(movie)){
            alert("You've already added this to the list!");
        } else {
            setVisitedMovies([...visitedMovies, movie])
        }
    }

    const selectMovie = (movie) => {
        setSelectedMovie(movie);
    }

    return(
        <div id="main-container">
            <MoviesList movies={movies} selectMovie={selectMovie}/>

            {selectedMovie ? 
                <MovieDetail 
                    selectedMovie={selectedMovie}
                    addVisitedMovie={addVisitedMovie}
                    quote={quotes}  
                /> 
                : <div></div>
            }

            {/* <VisitedMoviesList visitedMovies={visitedMovies}/> */}
        </div>
    );
}

export default MoviesContainer;