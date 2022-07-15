import React from "react";
import {Grid} from "@mui/material";
import {Note} from "../Note/Note";

const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const NotesList = () => {
    return <Grid container spacing={4}>
        {notes.map((note, index) => <Note key={index}/>)}
    </Grid>
}
