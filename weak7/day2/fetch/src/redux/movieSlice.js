import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllMovies = createAsyncThunk("movies/fetchAllMovies" ,
async () => {
    // "http://www.omdbapi.com?apikey=6b3ad9db" 
    const responce = await fetch("https://www.omdbapi.com/?s=action&apikey=77ffa273&page=1");
    const movies = await responce.json();
    return movies
    //   console.log(movies)

});



const movieSlice = createSlice ({
    name : "movies",
    initialState : {
        movies :[],
        loading : false,
    },
   
    extraReducers : (builder) => {
        builder.addCase(getAllMovies.fulfilled , (state , action) => {
            // console.log(state.movies = action.payload)
        //    state.movies=(action.payload)
            // console.log(state.movies)
            console.log(action.payload.Search)
             state.movies=action.payload.Search
        });

        builder.addCase(getAllMovies.rejected , (state , action) => {
            state.movies = []
        });

        builder.addCase(getAllMovies.pending , (state , action) => {
             state.loading = true
        });
    }
})

export const moviesReducer = movieSlice.reducer
