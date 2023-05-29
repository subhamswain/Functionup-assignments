
import {configureStore} from "@reduxjs/toolkit"
import {moviesReducer} from "./movieSlice"
import {favmovies} from "./favSlice"

const store = configureStore({
    reducer : {
    movies : moviesReducer,
    // FavMov :  AddFavourite,
    Faviorites:favmovies,
    }
})

export default store