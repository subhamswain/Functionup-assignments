
import { createSlice } from "@reduxjs/toolkit";
// import Faviorites from "../UI/Faviorites";

const favSlice = createSlice({
    name:"Faviorites",
    initialState:[],
     
  
    reducers:{

        addMovies: (state,action) => {
       state.push(action.payload)
      
            
        },

        removeMovies :(state,action) => {
        //  const a = console.log(state.filter((fav,i)=> fav.imdbId !== action.payload.imdbId));
        //   state = a
        if(state.length !== 0){
        return ( state.filter((fav) =>  fav.imdbID !== action.payload.imdbID))
        }
        
        },

    },
        
    

})
export const  favmovies = favSlice.reducer;
export const {addMovies , removeMovies} = favSlice.actions