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

interface Props {
    cardData: LessonEntity
}

export const LessonCard = ({cardData}: Props) => {
    const date = new Date(cardData.createdAt)
    return (
        <Card
            sx={{height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}
        >
            <CardMedia
                component="img"
                image={`https://img.youtube.com/vi/${cardData.url}/maxresdefault.jpg`}
                alt="random"
            />
            <CardContent sx={{flexGrow: 1}}>

                <Typography component='div' sx={{display: 'flex', justifyContent: 'flex-end'}} gutterBottom
                            variant="caption">
                    Created: {date.toLocaleString()}
                </Typography>
                {/*<Typography gutterBottom variant="caption">*/}
                {/*    #javasript #programming #ts #webdev*/}
                {/*</Typography>*/}
                <Typography gutterBottom variant="h5" component="h2">
                    Heading
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                    Author
                </Typography>
                <Typography>
                    This is a media card. You can use this section to describe the
                    content.
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
