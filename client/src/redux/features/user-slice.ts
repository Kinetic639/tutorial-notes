import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UserEntity} from "types";

interface userSliceState {
    user: UserEntity | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: userSliceState = {
    user: {id: 'aaaa', name: 'Test User', email: 'test@email.com'},
    status: 'idle',
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getMoviesAsync.pending, (state, action) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(getMoviesAsync.fulfilled, (state, action) => {
    //             state.status = 'succeeded';
    //             state.moviesLists = action.payload
    //         })
    //         .addCase(getMoviesAsync.rejected, (state, action) => {
    //             state.status = 'failed';
    //         })
    //
    // },
});

export default userSlice.reducer;
