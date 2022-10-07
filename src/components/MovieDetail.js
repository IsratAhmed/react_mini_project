const MovieDetail = ({selectedMovie, addVisitedMovie, quote}) => {
    
    const handleClick = () => {
        selectedMovie(addVisitedMovie);
    }

    return(
        <div id="movie-detail">
            <h2>{selectedMovie.name}</h2>
            <ul>
                <li>Name: {selectedMovie.name}</li>
                <li>Quote: {quote.quote}</li>
                <li>Character: {quote.role}</li>
            </ul>
            {/* <button onClick={handleClick}>Add to wish list!</button> */}
        </div>
    )
}

export default MovieDetail;