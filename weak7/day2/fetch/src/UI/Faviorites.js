import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
  import {removeMovies} from "../redux/favSlice.js"

function Faviorites() {
   const dispatch = useDispatch();
    const favMov = useSelector(state => state.Faviorites)

    function removeFromFav(fav){
         dispatch(removeMovies(fav))
        // console.log(dispatch(RemoveMovies(fav)))

    }

    return (
        <>
            {/* <h1>hii shailja</h1> */}
            {/* {console.log(favMov.Faviorites)} */}
            {favMov.map((fav,ind) => {
                return (
                    <>
                    <div key={fav.imdbId}>
                    <div>
                        <h2>{fav.Title}</h2>
                        <h3>{fav.Year}</h3>
                        {/* <h1>{movie.imdbID}</h1> */}
                        <img src={fav.Poster} alt="" />
                        
                    </div>
                    <button onClick={() => {removeFromFav(ind)}}>remove</button>
                    </div>
                    </>
                )
            })}
        </>
    )
}

export default Faviorites