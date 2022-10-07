const MovieListItem = ({movie, selectMovie}) => {

    const handleClick = () => {
        selectMovie(movie);
    }

    return (
        <li onClick={handleClick}>{movie.name}</li>
    );
}

export default MovieListItem;