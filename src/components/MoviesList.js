import MovieListItem from "./MovieListItem";

const MoviesList = ({movies, selectMovie}) => {

    const movieListItems = movies.map((movie)=>{
        return <MovieListItem 
                    movie={movie} 
                    selectMovie={selectMovie}
                />
    })

    return(
        <ul>
            {movieListItems}
        </ul>
    );
}

export default MoviesList;