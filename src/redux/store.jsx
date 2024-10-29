import { configureStore } from "@reduxjs/toolkit";
import { catReducer } from "./slice/catSlice";
import { dogReducer } from "./slice/dogSlice";

const store = configureStore({
    reducer: {
        cats: catReducer,
        dogs: dogReducer
    }
})
export default store