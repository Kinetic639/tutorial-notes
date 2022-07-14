import React from "react";
import {Grid} from "@mui/material";
import {LessonCard} from "../../LessonCard/LessonCard";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const LessonsList = () => {
    return <Grid container spacing={4}>
        {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
                <LessonCard/>
            </Grid>
        ))}
    </Grid>
}
