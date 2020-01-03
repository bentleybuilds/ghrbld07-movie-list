import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = (props)=>(
    <ul>
        {props.movies && props.movies.map((movie,index)=>(
            <MovieItem key={index} movie={movie} /> 
        )) || <li>No Movies Found</li>} 
    </ul>

)

export default MovieList;