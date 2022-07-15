import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LessonEntity} from "types";

export const getLessonsAsync = createAsyncThunk(
    'movies/getLessonsAsync',
    async (userId) => {
        const res = await fetch(`http://localhost:3001/api/lessons/aaaa`)
        const data = await res.json()
        return data
    })


interface lessonsSliceState {
    lessons: LessonEntity[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: lessonsSliceState = {
    lessons: [],
    status: 'idle',
    error: null,
};

export const lessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLessonsAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getLessonsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.lessons = action.payload
            })
            .addCase(getLessonsAsync.rejected, (state, action) => {
                state.status = 'failed';
            })

    },
});

export default lessonsSlice.reducer;
