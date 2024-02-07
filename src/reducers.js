import {createReducer,createAction, createSlice} from '@reduxjs/toolkit'


const initialState = { value: 0 }
export const namedSliced = createSlice({
    name:"namemodifierslice",
    initialState,
    reducers:{

      
    
        customname(state, action){
            state.value = 1;
        },
        nametodot(state, action)  {
            state.value = 1;

    
        },
        nametorakeshh(state, action){
            state.value = 1;
        },
    

    }
}
    
)

// export const {nametorakeshh, nametodot,customname} = nameSlice.actions;
// export default nameSlice;

    
