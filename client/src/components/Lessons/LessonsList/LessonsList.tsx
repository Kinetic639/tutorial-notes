import React from "react";
import {Grid} from "@mui/material";
import {LessonCard} from "../../LessonCard/LessonCard";
import {useAppSelector} from "../../../redux/app/hooks";
import {LessonEntity} from "types";

interface Props {
    lessons: LessonEntity[]
}

export const LessonsList = ({lessons}: Props) => {
    return <Grid container spacing={4} sx={{justifyContent: 'center'}}>
        {lessons.map((card, index) => (
            <Grid item key={index} sm={12} md={6} lg={4} xl={3}>
                <LessonCard cardData={card}/>
            </Grid>
        ))}
    </Grid>
}
