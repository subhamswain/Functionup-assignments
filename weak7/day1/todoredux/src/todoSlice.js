import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({

    initialState :{
        todo : []
    },
    // todo:[],

    name : "TodoList",

    reducers : {
        addItems : (state , action ) => {
        //  state.push(action.payload)
        // console.log(action.payload)
        state.todo.push(action.payload)
        // console.log(state.todo.push(action.payload))
        },
        updateItems : (state, action) => {
            console.log(state.todo)

        }
    }

})

export const {addItems} = todoSlice.actions
export const todoRed =  todoSlice.reducer;