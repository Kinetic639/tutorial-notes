import React from "react";
import {Grid} from "@mui/material";
import {LessonCard} from "../../LessonCard/LessonCard";
import {useAppSelector} from "../../../redux/app/hooks";
import {LessonEntity} from "types";

interface Props {
    lessons: LessonEntity[]
}

export const LessonsList = ({lessons}: Props) => {
    return <Grid container spacing={4}>
        {lessons.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
                <LessonCard cardData={card}/>
            </Grid>
        ))}
    </Grid>
}
