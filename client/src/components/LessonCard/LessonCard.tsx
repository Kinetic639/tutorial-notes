import React from "react";
import {Card, CardMedia, IconButton} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {LessonEntity} from "types";
import StarIcon from '@mui/icons-material/Star';
import {truncateString} from "../../utils/turncate";

interface Props {
    cardData: LessonEntity
}

export const LessonCard = ({cardData}: Props) => {
    const date = new Date(cardData.createdAt)
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                maxWidth: '380px',
                flexDirection: 'column',
                cursor: 'pointer',
                margin: '0 auto'
            }}
        >
            <CardMedia
                component="img"
                image={cardData.thumbnail}
                alt="random"
            />
            <CardContent sx={{flexGrow: 1}}>

                <Typography component='div' sx={{display: 'flex', justifyContent: 'flex-end'}} gutterBottom
                            variant="caption">
                    Created: {cardData.createdAt}
                </Typography>
                {/*<Typography gutterBottom variant="caption">*/}
                {/*    #javasript #programming #ts #webdev*/}
                {/*</Typography>*/}
                <Typography gutterBottom variant="h5" component="h2">
                    {truncateString(cardData.title, 100)}
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                    {cardData.author}
                </Typography>
                <Typography>
                    {truncateString(cardData.description, 100)}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton color='primary'>
                    {cardData.isImportant !== 0 ? <StarIcon/> : <StarBorderIcon/>}
                </IconButton>
                <Box sx={{flexGrow: 1}}/>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}
