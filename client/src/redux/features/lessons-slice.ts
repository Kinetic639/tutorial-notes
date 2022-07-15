import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LessonEntity, NewLessonRecord} from "types";
// import {REACT_APP_API_URL} from "../../config";

export const getLessonsAsync = createAsyncThunk(
    'lessons/getLessonsAsync',
    async (userId) => {
        const res = await fetch(`https://tutorial-notes.herokuapp.com/api/lessons/aaaa`)
        const data = await res.json()
        return data
    })

export const addLessonAsync = createAsyncThunk(
    'lessons/addLessonAsync',
    async (payload: NewLessonRecord, {dispatch}) => {
        const res = await fetch(`https://tutorial-notes.herokuapp.com/api/lessons/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        });
        if (res.ok) {
            const lesson = await res.json();
            return lesson;
            console.log(lesson)
        }
        return payload;
    },
);


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
            .addCase(addLessonAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addLessonAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.lessons.push(action.payload)
            })
            .addCase(addLessonAsync.rejected, (state, action) => {
                state.status = 'failed';
            })

    },
});

export default lessonsSlice.reducer;
