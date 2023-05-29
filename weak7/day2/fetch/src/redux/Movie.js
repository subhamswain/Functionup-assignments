

import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from './movieSlice'

import { useEffect } from 'react';
import { addMovies } from './favSlice';

function Movie() {
    const dispatch = useDispatch();
    const movieArr = useSelector(state => state.movies)
   

    
    useEffect(() => {
        dispatch(getAllMovies())

    }, [])

    function AddTOFav(movie) {

        // /dispatch(addMovies(movie))
        console.log(dispatch(addMovies(movie)))
    }
    const addStyle ={
        borderRadius:"10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
       
        width : "40vw"
    }

    return (
        <>
            {movieArr.movies.map((movie) => {
                return (
                    <div key={movie.imdbID} style={addStyle}>
                        <div >
                            <h2>{movie.Title}</h2>
                            <h3>{movie.Year}</h3>
                            <img src={movie.Poster} alt="" />
                            <button onClick={() => AddTOFav(movie)}>add to favorite</button>
                        </div>
                       
                    </div>
                )
            })}
        </>
    )
}

export default Movie