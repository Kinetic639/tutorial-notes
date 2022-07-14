import React from "react";
import {Card, CardMedia, IconButton} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const LessonCard = () => {
    return (
        <Card
            sx={{height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}
        >
            <CardMedia
                component="img"
                image="https://picsum.photos/1280/720"
                alt="random"
            />
            <CardContent sx={{flexGrow: 1}}>

                <Typography component='div' sx={{display: 'flex', justifyContent: 'flex-end'}} gutterBottom
                            variant="caption">
                    Created: 12-12-2022 13:45
                </Typography>
                <Typography gutterBottom variant="caption">
                    #javasript #programming #ts #webdev
                </Typography>
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
                    <StarBorderIcon/>
                </IconButton>
                <Box sx={{flexGrow: 1}}/>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}
