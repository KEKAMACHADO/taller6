import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
     name: "data",
     initialState: {
        getDataDogs:[]
     },
     reducers:{
        setDataDogs(state,action){
            state.getDataDogs=action.payload
        }
     }
})
export  const {setDataDogs}=dataSlice.actions
export default dataSlice.reducer