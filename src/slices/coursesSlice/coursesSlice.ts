/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useFetch from '../../hooks/useFetch';
import { ICourseState } from './coursesSlice.types';

const API_DOMAIN = "https://api.apilayer.com/fixer";
const API_KEY = import.meta.env.VITE_API_KEY

const initialState: ICourseState = {
    course: null,
    symbols: [],
    loading: 'idle'
};

export const fetchCourse = createAsyncThunk('courses/fetchCourse', (arg) => {
    console.log(arg);
    const { request } = useFetch();
    // return request(`${API_DOMAIN}/convert?apikey=${API_KEY}&to=${to}&from=${from}&amount=${amount}`);
});


export const fetchSymbols = createAsyncThunk('courses/fetchSymbols', () => {
    const { request } = useFetch();
    return request( `${API_DOMAIN}/symbols?apikey=${API_KEY}`);
});

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSymbols.pending, (state) => {
            })
            .addCase(fetchSymbols.fulfilled, (state, action) => {
                state.symbols = action.payload
            })
            .addCase(fetchSymbols.rejected, (state) => {
            })
            .addCase(fetchCourse.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchCourse.fulfilled, (state, action) => {
                state.course = action.payload
                state.loading = 'idle'
            })
            .addCase(fetchCourse.rejected, (state) => {
                state.loading = 'error';
            })
    },
});

const { reducer } = coursesSlice;

export default reducer;