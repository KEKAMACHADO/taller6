import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    dogs: [],
    loading: false,
    error: null,
}

const dogSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        fetchDogsStart: (state) => {
            state.loading = true
            state.error = null
        },
        fetchDogsSuccess: (state, action) => {
            state.loading = false;
            state.dogs = action.payload
        },
        fetchDogsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    },
})

export const { fetchDogsStart, fetchDogsSuccess, fetchDogsFailure } = dogSlice.actions

export const fetchDogs = () => async (dispatch) => {
    dispatch(fetchDogsStart())
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search?limit=10&api_key=live_oiRVP3pe3a0heKAFqnRDW9cPcdCwAOIUjubqAVO2tKEw1C3dxudEHPnvLKMTKxxN')
        dispatch(fetchDogsSuccess(response.data))
    } catch (error) {
        dispatch(fetchDogsFailure(error.message))
    }
}

export const dogReducer = dogSlice.reducer