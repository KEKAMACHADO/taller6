import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   cats: [],
   loading: false,
   error: null,
}

const catSlice = createSlice({
   name: 'cats',
   initialState,
   reducers: {
      fetchCatsStart: (state) => {
         state.loading = true
         state.error = null
      },
      fetchCatsSuccess: (state, action) => {
         state.loading = false
         state.cats = action.payload
      },
      fetchCatsFailure: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export const { fetchCatsStart, fetchCatsSuccess, fetchCatsFailure } = catSlice.actions

export const fetchCats = () => async (dispatch) => {
   dispatch(fetchCatsStart())
   try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_zPcocuJPpUuFEkQyWDD6ERwYzHrDIokvHpYHhmWzFbZ7BvMfCiEM3y9O0OvBcgp6');
      dispatch(fetchCatsSuccess(response.data))
   } catch (error) {
      dispatch(fetchCatsFailure(error.message))
   }
}

export const catReducer = catSlice.reducer