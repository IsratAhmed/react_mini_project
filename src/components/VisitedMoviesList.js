import MovieListItem from "./MovieListItem";

const VisitedMoviesList = ({visitedMovies, selectMovies}) => {
    const visitedMoviesListItems = visitedMovies.map((movie) => {
        return <MovieListItem movie={movie} selectMovies={selectMovies}/>
    })
    return(
        <ul>
            <h2>Movies yet to be seen: </h2>
            {visitedMoviesListItems}
        </ul>
    );
}

export default VisitedMoviesList;