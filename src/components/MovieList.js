import React from "react";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="justify-content-center m-3">
                    <div>
                        <img src={movie.Poster} alt = "Movie"></img>
                    </div>
                
                    <div>
                        <p>{movie.Title}</p>
                        <p>{movie.Year}</p>
                        <button type="button" className="btn btn-danger"> {movie.imdbID}</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList