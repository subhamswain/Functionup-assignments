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
        updateStatus : (state, action) => {
            // 
            // const {} = action.payload/
            // console.log(action.payload);
            // console.log(state.todo)
            const {id, status} = action.payload;
            // console.log(id,status)
            const abc = state.todo.find((i=> i.id ===id));
            if(abc){
                abc.status = status
            }

        }
    }

})

export const {addItems, updateStatus} = todoSlice.actions
export const todoRed =  todoSlice.reducer;